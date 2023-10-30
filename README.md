# Arc XP Shared Components

This repository is the lerna-managed monorepo for helpful code for Arc XP customers or to serve as a sample. This monorepo is a collection of packages for blocks, components, and utils. 

Comprehensive documentation is located in Arc XP Learning Center [ALC](https://docs.arcxp.com/alc). Documentation for your specific use case may not be available, and instead, Arc XP may provide documentation per implementation.

To use any of the given packages directly, follow the guidance on [Using Private NPM Repository in your bundle](https://docs.arcxp.com/alc?sys_kb_id=b7aab611470cb190eee38788436d4376&id=kb_article_view&sysparm_rank=1&sysparm_tsqueryId=2eb580878781f150637f315d0ebb3585)

## Available Implementations

### Oovvuu Video

The Oovvuu Video implementation and its usage is documented in [ALC: Arc XP's Oovvuu Power Up](https://docs.arcxp.com/alc/en/arc-xp-s-oovvuu-power-up?sys_kb_id=9e662a7c474abd10eee38788436d430f&id=kb_article_view&sysparm_rank=2&sysparm_tsqueryId=fab355f587ce3110637f315d0ebb3588)

Full implementation requires you to install the following packages : 
- @arcxp/shared-powerup-output-type-block
- @arcxp/shared-powerup-oovvuu-video-block
- @arcxp/shared-oovvuu-video-component

Dependency: 
- @arcxp/shared-powerup-composer-utils

## Local Setup for Developers

1. Make sure you have an npmrc file with write-access to @arcxp packages. This is available in your [dev settings](https://github.com/settings/tokens).

2. Create an `.npmrc` file in the root of your project.

```.npmrc
@arcxp:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=ghp_secrettoken
```

3. `npm i` to install packages

4. Make changes to any of the packages, or create new packages, and commit newest changes to feature-branch. New packages should be sorted into the following folder structure: 
- Blocks: Use the included packages as finished Chains/Features/Layouts in Feature Pack
- Components: Use the included packages as Components in Chains/Features/Layouts and should not stand by themselves
- Utils: The included packages support Blocks and Components, but you can also use them independently for custom code outside of this repo. This should not contain compiled code. If it includes compuled code, then you must create two packages

5. Run `npm run build` - compile only packages in src/blocks and src/components should be compiled. Packages in those folders must follow the structure:
```
|--- package-folder
  |--- src
    |--- index.jsx
  |--- package.json
```

6. To publish changes in a package, run `npx lerna publish` and choose an appropriate version. Use ghp_secrettoken from step 1 and 2 as authentication for github

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
