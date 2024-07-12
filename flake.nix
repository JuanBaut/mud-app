{
  description = "Next.js project with Cypress";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        devShell = pkgs.mkShell {
          name = "cypress-nextjs-shell";

          buildInputs = with pkgs; [
            cypress
            nodePackages_latest.nodejs
            corepack_latest
          ];

          shellHook = ''
            export CYPRESS_INSTALL_BINARY=0
            export CYPRESS_RUN_BINARY=${pkgs.cypress}/bin/Cypress
          '';
        };
      });
}
