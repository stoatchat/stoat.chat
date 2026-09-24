const LATEST_BUILD = "1.5.3" as const;

export default class Consts {
  static readonly MSSTORE_URL =
    "ms-windows-store://pdp/?ProductId=9nmtvmrj7n1k" as const;
  static readonly PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=chat.revolt" as const;
  static readonly FLATHUB_URL =
    "https://flathub.org/apps/chat.revolt.RevoltDesktop" as const;
  static readonly WEB_APP_URL = "https://stoat.chat/app" as const;
  static readonly GITHUB_URL =
    "https://github.com/stoatchat/for-desktop/releases/" as const;
  static readonly WINDOWS_BUILD_URL =
    `https://github.com/stoatchat/for-desktop/releases/download/v${LATEST_BUILD}/stoat-desktop-setup.exe` as const;
  static readonly MACOS_ARM64_BUILD_URL =
    `https://github.com/stoatchat/for-desktop/releases/download/v${LATEST_BUILD}/Stoat-darwin-arm64-${LATEST_BUILD}.zip` as const;
  static readonly MACOS_X64_BUILD_URL =
    `https://github.com/stoatchat/for-desktop/releases/download/v${LATEST_BUILD}/Stoat-darwin-x64-${LATEST_BUILD}.zip` as const;
  static readonly LINUX_FLATHUB =
    `https://flathub.org/en/apps/chat.stoat.StoatDesktop` as const;
}
