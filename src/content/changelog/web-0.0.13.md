---
title: "Stoat for Web: 0.0.13"
description: "Introducing new voice features and an improved messaging experience."
author: "insert"
product: "web"
date: "2025-10-23 16:00:00 UTC"
relevance:
  minVersionCode: 0
---

This update brings a host of improvements to voice chats along with an improved messaging experience.

## Improved Text Editor

We're replacing the message box with something more usable, we've brought back and improved the experience from the legacy client, featuring rich text preview while not intruding on what you're typing.

![Screenshot showing the new text editor](/content/changelog/web-0.0.13/text_editor.png)

## Improved Voice Chats v2 Support

The app now supports a host of Voice Chats v2 features. <br> With an all new improved user interface:

![Screenshot showing joining and leaving a call](/content/changelog/web-0.0.13/new_ui.gif)

You can now also see users who are in voice chat in the server sidebar:

![Screenshot showing users in a voice chat in the sidebar](/content/changelog/web-0.0.13/sidebar.png)

And if you navigate away, the voice chat stays accessible:

![Screenshot showing picture in picture voice chat](/content/changelog/web-0.0.13/pip.gif)

## Other Fixes and Improvements

- Create/delete categories through the context menu. (marcy: <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/491">#491</a>)
- Fix legibility of information in the image viewer. (amycatgirl: <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/488">#488</a>)
- Add permission entries for everyone/role mentions. (amycatgirl: <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/484">#484</a>)
- Various improvements to navigation and home page. (marcy: <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/483">#483</a>, <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/475">#475</a>)
- Fix various validation and visual issues with link warnings. (Aeledfyr: <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/476">#476</a>, <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/478">#478</a>)
- Preserve replies when sending GIFs. (pparaxan: <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/474">#474</a>)
- Add integration testing to prevent broken builds going to production.
- Fix the client trying to send more than maximum attachments when many are selected.
- Fix wordmark showing dark on dark theme.
- Publish `stoat.js` and `stoat-api` packages to npmjs.
- Internally switch to bigints for permissions.
- Don't permit adding more replies than maximum. (marcy: <a rel="nofollow ugc" target="_blank" href="https://github.com/stoatchat/for-web/pull/495">#495</a>)
