---
layout: post
title: Superheterodyne vs Direct-Conversion
date: 2019-02-17 12:00:00 +0300
img: https://cdn-images-1.medium.com/max/2560/1*QRdijMeMYnNT3ZYGGhcbvQ.jpeg
author: juan
categories: [blogs]
---

Due to the increase of cheap Chinese radio a lot of people had been complaining that their receiver had been over modulated (bingi) if they connect it to an external antenna. Over-modulation is a condition where there is a high level of modulating (transmitting) signal exceed the value necessary to produce 100% modulation of the carrier. It means you won’t be able to hear the other station because your receiver cannot filter all the modulating signal transmitted from other radio, even if they are transmitting on different frequency.

## What is a Superheterodyne receiver?

The superheterodyne receiver or superhet, was invented in 1917, it is a type of receiver that uses frequency mixing to convert the received signal to a fixed intermediate frequency (IF) which can be easily process. Intermediate Frequency (IF) is a frequency to which a carrier wave is shifted as an intermediate step in transmission or reception.

The basic principle is to convert a RF signals to an intermediate frequency (IF) by mixing a tunable local oscillator (LO) with incoming signals (*see Figure 1*). A fixed-frequency narrow-channel filter is applied at the mixer output, then followed by most of the receiver’s gain and demodulation. RF filters are placed before and after the LNA stage.

{% include image.html url="https://cdn-images-1.medium.com/max/3840/1*pMvVR-mk7_SWtqKPWseaSw.png" description="**Figure 1.** Block diagram of a superheterodyne receiver." %}

The benefits of a superhet are enormous and sometimes it outweighs the cost. Most of the filtering and gain takes place at one fixed frequency rather than requiring a tunable high-Q band pass filters.

However, the cost and size of IF filters is still expensive to budget conscious manufacturer hence modern cheap transceiver nowadays either have Low-IF or Direct-Conversion receiver.

## What is a Low-IF receiver?

Technically it is still superheterodyne, however the cost and size of IF component matters to some designers that they reduced the components of that bulky and expensive IF filters.

The advantage over High-IF superhet is that the gain and filtering are done at a lower frequency, this reduces the power it uses thus making it possible to use on-chip components which in turns reducing the size and cost.

The disadvantage of a near zero-IF is that the receiver’s polyphase filters require more components than an equivalent low-pass filter used in a direct-conversion filter. Another is the image cancellation is dependent on the LO quadrature accuracy which may vary with process variations and temperature changes.

## What is a Direct-Conversion receiver?

Direct-Conversion receiver or homodyne, synchrodyne, or zero-IF receiver, is a type radio receiver where the local oscillator (LO) is set to the same frequency as the desired RF channel, that means the IF is zero or dc. The filtering and gain can take place at dc where gain is easier to achieve with low power and filter can be accomplished with on-chip resistors and capacitors instead of bulky surface-acoustic wave (SAW) filters. (*see Figure 2*)

{% include image.html url="https://cdn-images-1.medium.com/max/2000/1*3ph9WifjnZDgwRifqLjYrw.png" description="***Figure 2.** Block diagram of Direct-conversion receiver*" %}

## Which one is better?

So which is better? Depends on your needs, so which one is good for?

**Superheterodyne**

Suited for people who want radio with good filters, with this filter comes at a high price and I mean literally high price. Most superhet radios are expensive.

**Direct-conversion**

Direct-conversion is cheap and I mean dirt chip. Most Chinese radio uses RDA1486 system on chip (SOC) which basically do all the transceiver functions which made the manufacturing cheaper and smaller, at the expense of filters.

## The Future

Direct-conversion is the future, it has still a long way to go but it’s going there anyway. The technology on Digital signal processing is also improving so that means we will have some direct-conversion radio in the future that is cheap but can perform similar to the superhet.

## Notes…

So the next time you connect your Chinese radio into an external antenna, take time to do some propagation testing, see if your area has high RF traffic. If it does, I suggest getting a good radio with good filter. It will be expensive but it would surely give you peace of mind that every time you press that PTT your signal will always get through or you receive those important traffic.
