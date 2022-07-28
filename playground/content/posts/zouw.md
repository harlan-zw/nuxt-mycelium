---
description: "What is Zouw.app and why did I built it ?"
publishedAt: "7-7-2020"
title: What is Zouw?
image: https://www.datocms-assets.com/25867/1600698114-banner-zouw.png
---

I've always been a big [YouTube](https://youtube.com "YouTube") user. I love this platform and the amount of things I've been discovering and learning on it.

However, I've got the feeling that the user experience didn't grew the right way and lacks a lot of features. Unlike the tremendous work done on the content creators oriented platform.

That's why, after devouring the [YouTube API](https://developers.google.com/youtube/v3 "YouTube API"), I've decided to create [my alternative webapp](https://zouw.app "Zouw") to improve my experience on YouTube.

### What is missing ?

When I was young, I remember the "free months vouchers" on [Canal+](https://fr.wikipedia.org/wiki/Canal%2B "Canal+") (a french legacy cable TV provider), allowing me to access their channels packages free.

Those packages agglomerated channels by interests: science, video games, cartoons... I've got great memories of afternoons spent sailing between channels categories.

And it's one of the biggest problem of YouTube in my opinion, it is really hard to browse without getting "lost" in content that does not match what we wanted to watch in the first place.

Subscriptions allows us the follow our favorite content creators, but nothing is here to categorize them, or to filter the content through interests shared between those subscriptions.

Moreover, if you use subscriptions a lot (100+), the subscriptions tab start filtering videos without giving you any notice on which criterias are used.

Besides this categorization of content problem, I feel that the browsing of YouTube can often be slow and pales in front of modern web apps.

### Which answer ?

So I developed Zouw, an alternative web interface for YouTube revolving around 4 core features that seemed to be missing for me:

*   Interests based videos feeds
*   An optimal playlist management
*   Categorization of my subscriptions
*   A modern and smooth interface

Interests can be seen as "folders" for your favorites channels, playlists and videos. Agregating all those allows Zouw to generate a feed based on this interest.

The playlist management has been completely reviewed. Drag'n'drop is smooth, a lot of time-saving features has been added like cleaning playlists duplicates. Video titles are also saved when you add an item to your playlist, so in case of YouTube deletes it, it's easy to find an alternative.

Zouw also uses YouTube API to categorize each of your subscriptions, offering a subscriptions management tab that looks modern and let you browse your favorite channels like never before.

If you want to discover all the Zouw features, I invite you to visit the [landing page](https://zouw.app "Zouw") of the app.

### A technological challenge

This project uses a stack I know well, [Laravel](http://laravel.com "Laravel") for the API and [Vue](https://vuejs.org "Vue") for the frontend.

Some parts of the app had been a real challenge to me, especially when it comes to quota based on the amount of requests made to the YouTube API.

I handled those very strict limitations by using 2 things: a flexible queue system and agressive caching mechanics.

### Conclusion

Zouw has been a great adventure for me, full of learnings and discoveries. I met many challenges that I never had the opportunity to face before.

The end result allows me to consume YouTube in a much smoother and personal way I used to with the offical client.

A small tribute to [CandyLists](https://www.producthunt.com/posts/candylists "CandyLists"), the first version of Zouw, that allowed me to understand a lot of problems and helped me releasing a v2 much more performant and ergonomic.
