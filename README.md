# Ecoflow Card

[![hacs][hacs-badge]][hacs-url]
[![release][release-badge]][release-url]
![downloads][downloads-badge]
![build][build-badge]


## What is Ecoflow Card ?

Ecoflow carf is custom card for [Home Assistant][home-assistant] Dashboard UI.

It uses [Ecoflow Home Assistan Integration][integration] devices to show it.

### Screenshots

<img src="https://github.com/serhiime/lovelace-ecoflow-card/blob/master/images/card-01.png?raw=true" style="width: 48%; margin: auto">
<img src="https://github.com/serhiime/lovelace-ecoflow-card/blob/master/images/card-02.png?raw=true" style="width: 48%; margin: auto">

### Features

- 🛠 Editor for card (no need to edit `yaml`)
- 😍 Color customisation
- 🚀 0 dependencies : no need to install another card.
- 🌈 Based on Tailwind CSS
- 🌎 Internationalization (now only English and Ukrainian)

## Installation

### HACS

Ecoflow Card will be available in [HACS][hacs] (Home Assistant Community Store).

Use this link to directly go to the repository in HACS

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=serhiime&repository=lovelace-ecoflow-card)

_or_

1. Install HACS if you don't have it already
2. Open HACS in Home Assistant
3. Search for "Ecoflow Card"
4. Click the download button. ⬇️

### Manual

1. Download `ecoflow-card.js` file from the [latest release][release-url].
2. Put `ecoflow-card.js` file into your `config/www` folder.
3. Add reference to `ecoflow-card.js` in Dashboard. There's two way to do that:
    - **Using UI:** _Settings_ → _Dashboards_ → _More Options icon_ → _Resources_ → _Add Resource_ → Set _Url_ as `/local/ecoflow-card.js` → Set _Resource type_ as `JavaScript Module`.
      **Note:** If you do not see the Resources menu, you will need to enable _Advanced Mode_ in your _User Profile_
    - **Using YAML:** Add following code to `lovelace` section.
      ```yaml
      resources:
        - url: /local/ecoflow-card.js
          type: module
      ```

## Usage

Ecoflow card can be configured using Dashboard UI editor.

1. In Dashboard UI, click 3 dots in top right corner.
2. Click _Edit Dashboard_.
3. Click Plus button to add a new card.
4. Find _Custom: Ecoflow_ card in the list.


### Build

You can build the `ecoflow-card.js` file in `dist` folder by running the build command.

```sh
npm run build
```

<!-- Badges -->

[hacs-url]: https://github.com/hacs/integration
[hacs-badge]: https://img.shields.io/badge/hacs-default-orange.svg?style=flat-square
[release-badge]: https://img.shields.io/github/v/release/serhiime/lovelace-ecoflow-card?style=flat-square
[downloads-badge]: https://img.shields.io/github/downloads/serhiime/lovelace-ecoflow-card/total?style=flat-square
[build-badge]: https://img.shields.io/github/actions/workflow/status/serhiime/lovelace-ecoflow-card/build.yml?branch=master&style=flat-square

<!-- References -->

[home-assistant]: https://www.home-assistant.io/
[home-assitant-theme-docs]: https://www.home-assistant.io/integrations/frontend/#defining-themes
[hacs]: https://hacs.xyz
[release-url]: https://github.com/serhiime/lovelace-ecoflow-card/releases
[integration]: https://github.com/tolwi/hassio-ecoflow-cloud/tree/main
