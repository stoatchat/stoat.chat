{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell rec {
  buildInputs = [
    # Nix formatter
    pkgs.nixfmt-rfc-style

    # Tools
    pkgs.git

    # Node
    pkgs.deno
    pkgs.nodejs
    pkgs.nodejs.pkgs.pnpm
  ];
}
