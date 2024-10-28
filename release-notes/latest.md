---
sidebar_position: 0
---

# Release v0.6.0

:::info Download
Looking for the download link? Install using the [FlyByWire Installer](https://api.flybywiresim.com/installer).
:::

This new stable release features a rewritten PFD, new sounds for nearly every switch and knob, improved textures, QoL features such as automatic fuel management, various bug fixes, and more.

## Changelog

* **[PFD]** Rewrote PFD to match almost all real-world functionality
* **[MODEL]** Improved engine startup animation
* **[MODEL]** Fixed inboard spoilers not deploying
* **[MODEL]** The PTT button now engages TO/GA, for convenience
* **[MODEL]** Fixed a bug where some synoptic switches were inop
* **[MODEL]** Made the datalink switches (ACPT, CANC, RJCT) interactable
* **[MODEL]** Made the yaw damper switch interactable
* **[MODEL]** Fixed a bug where pilots were not visible
* **[FUEL]** Added automatic fuel management option (disabled by default)
* **[FUEL]** Improved fuel flow
* **[FMC]** Fixed coordinates inserting at wrong index when using uplink
* **[FMC]** The exit waypoint of an airway is now inserted as direct if airway is not found during uplink
* **[FMC]** Added support for the less common 11-character coordinate format ("6000N12830W")
* **[FMC]** Tuned LNAV
* **[ND]** Added position trend vector
* **[SOUND]** Fixed a bug where some switches did not make a sound
* **[SOUND]** Added new sounds for nearly every switch and knob
* **[TEXTURES]** Improved textures
* **[EICAS]** Fixed EICAS messages sometimes not appearing when loading in cold and dark
* **[EICAS]** Added YAW DAMPER EICAS message
* **[EICAS]** Added AIRSPEED LOW EICAS message
* **[OTHER]** Salty livery now shows as first livery in livery list
* **[OTHER]** Added fuel and payload manager
*