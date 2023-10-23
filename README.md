# Arc XP Shared Components

This is the lerna-managed monorepo for helpful code used by Arc XP Customers or to serve as a sample. This monorepo is a collection of packages for blocks, components and utils. 

Documentation is located in [ALC](https://docs.arcxp.com/alc). Inidivdual documentation may not be available and documentation will be be provided by implementation.

To use any of the given packages directly, follow the guidance on [Using Private NPM Repository in your bundle](https://docs.arcxp.com/alc?sys_kb_id=b7aab611470cb190eee38788436d4376&id=kb_article_view&sysparm_rank=1&sysparm_tsqueryId=2eb580878781f150637f315d0ebb3585)

## Available Implementations

### Oovvuu Video

The Oovvuu Video implementation and it's usage is documented in [ALC: Arc XP's Oovvuu Power Up](https://docs.arcxp.com/alc/en/arc-xp-s-oovvuu-power-up?sys_kb_id=9e662a7c474abd10eee38788436d430f&id=kb_article_view&sysparm_rank=2&sysparm_tsqueryId=fab355f587ce3110637f315d0ebb3588)

Full implementation requires the following packages to be installed: 
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

4. Make changes to any of the packages, or create new ones, commit newest changes to feature-branch. New packages should be sorted into the following folder structure: 
- Blocks: Packages included should be used as finished Chains/Features/Layouts in Feature Pack
- Components: Packages included should be used as Components in Chains/Features/Layouts and should not stand by itself
- Utils: Packages included are to support Blocks and Components, but also can be used independently for custom code outside of this repo. This should not contain compiled code, then two packages have to be created

5. Run `npm run build` - only packages in src/blocks and src/components should be compiled. Packages in those folders have to follow the structure:
```
|--- package-folder
  |--- src
    |--- index.jsx
  |--- package.json
```

6. to publish changes in a package, run `npx lerna publish` and choose an apropriate version, use ghp_secrettoken from step 1 and 2 as authentication for github

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
