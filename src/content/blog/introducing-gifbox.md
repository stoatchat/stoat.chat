---
title: Introducing Gifbox, the new GIF sharing service from Stoat
description: With our previous GIF API shutting down, we built Gifbox, a standalone, community-driven GIF service that's live in Stoat now and open for other apps to integrate.
author: Stoat Team
coverImage: /content/blog/introducing-gifbox/cover.png
date: "Jun 30 2026 00:00:00 UTC"
giscus: true
---

As some of you might be aware, [Tenor is shutting down its Developer API](https://support.google.com/tenor/answer/10455265#whatll-happen-to-the-tenor-api&zippy=%2Cwhatll-happen-to-the-tenor-api). If you have ever sent a GIF in a chat app, there is a good chance it came from Tenor via that API, and that includes Stoat. When we found out the API was going away, we had two options: wait around for someone else to solve it, although none of the options satisfied us at the time, or build the thing ourselves.

As you have already read from the title and description, we built the thing. It is available on [gifbox.me](https://gifbox.me) and powering Stoat's GIF picker starting right now.

Under the hood, it is built to be fast, modern, and easy to integrate. It is also not limited to Stoat: Stoat is the first place you can use it, but Gifbox is designed as a standalone service that other apps, websites, bots, and tools can use too, for example if they use our [Compatibility API](https://gifbox.me/dev/docs/compat/overview), which is largely compatible with Tenor's former API.

The most important part of Gifbox, however, is the library, and that's where we need your help: A GIF search engine is only as good as the stuff people put into it, so we are depending on community members like you to help make Gifbox great. Post the good GIFs, or the weird ones, or the funny ones, or whatever memes you have in your favourites. The more people add, the better it gets for everyone.

We are also launching a developer API, because GIFs should not be locked inside one app. Developers can use Gifbox to add GIF search and sharing to their own products without having to build the whole stack themselves. Documentation is available at [gifbox.me/dev/docs](https://gifbox.me/dev/docs), and we will be improving the API as we learn from early usage.

## Signing in

Gifbox accounts are intentionally lightweight right now. Public profiles are not live yet, but they are coming soon, and the long-term plan is to let people sign in with Stoat.

Since we are currently still working on the infrastructure to let you Sign In with Stoat on other websites, Gifbox currently uses so-called ✨ magic links ✨. That means you just have to enter your email and click the link to sign in.

One important detail: if you already have a Stoat account, use the same email address for Gifbox that you use for Stoat. That way, when Stoat sign-in arrives, we will be able to connect your Gifbox account to your Stoat account and transfer your GIFs cleanly.

## Final words

A quick note on Stoat: this is not taking development time away from the chat app. Gifbox exists because Stoat needs great GIFs, and building it in a reusable way makes the whole system better. Stoat remains our main focus, and Gifbox is part of making Stoat faster, more expressive, and more resilient.

Gifbox is live now in Stoat. Try it at [gifbox.me](https://gifbox.me), post something good, and help us make the GIF layer of the internet a little more open.
