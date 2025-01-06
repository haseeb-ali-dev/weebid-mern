import { atom } from 'recoil'

export const homeActivePitchesAtom = atom({
  key: 'homeActivePitchesAtom',
  default: [],
})

export const homeFulfilledPitchesAtom = atom({
  key: 'homeFulfilledPitchesAtom',
  default: [],
})
