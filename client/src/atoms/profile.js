import { atom } from 'recoil'

export const profileActivePitchesAtom = atom({
  key: 'profileActivePitchesAtom',
  default: [],
})

export const profileFulfilledPitchesAtom = atom({
  key: 'profileFulfilledPitchesAtom',
  default: [],
})

export const profileUserAtom = atom({
  key: 'profileUserAtom',
  default: {},
})
