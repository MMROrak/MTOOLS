# Developed by OmarH
import subprocess
import sys
import os
import time

def slowprint(text, delay=0.01):
    for c in text:
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(delay)
    print()
# Developed by OmarH
def install_pip_modules():
    modules = ["colorama", "rich"]
    for module in modules:
        try:
            __import__(module)
            print(f"[+] Module '{module}' already installed.")
        except ImportError:
            print(f"[+] Installing module: {module}")
            subprocess.call([sys.executable, "-m", "pip", "install", module])
# Developed by OmarH
def install_linux_packages():
    print("\n[+] Installing required Linux packages with APT (aircrack-ng, macchanger, hashcat)...")                                                                                                                                                        # Developed by OmarH                                                                     # Developed by OmarH                                    # Developed by OmarH
    subprocess.call("sudo apt update", shell=True)
    subprocess.call("sudo apt install -y aircrack-ng macchanger hashcat", shell=True)

def main():
    if os.geteuid() != 0:
        slowprint("\n[!] This script must be run as root!", 0.01)
        slowprint("[-] Please use: sudo python3 install_Wifi_deps.py\n", 0.01)
        sys.exit(1)
# Developed by OmarH
    slowprint("[*] Starting BLACKSTRIKE dependency installation...\n", 0.01)
    install_pip_modules()
    install_linux_packages()# Developed by OmarH
    slowprint("\n✅ All requirements have been installed successfully!", 0.01)
    slowprint("👉 You can now run the tool with: sudo python3 Wifi.py\n", 0.01)                                                                                                                                                                                                                                    # Developed by OmarH                                                                                                       # Developed by OmarH                                                                                                            # Developed by OmarH                

if __name__ == "__main__":
    main()
# Developed by OmarH