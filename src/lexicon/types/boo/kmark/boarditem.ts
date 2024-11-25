/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../lexicons'
import { isObj, hasProp } from '../../../util'
import { CID } from 'multiformats/cid'
import * as Pin from '../../pin'

export interface Record {
  createdAt: string
  /** at-uri of the board record */
  board: string
  pins: Pin.Main[]
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'boo.kmark.boarditem#main' ||
      v.$type === 'boo.kmark.boarditem')
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('boo.kmark.boarditem#main', v)
}

export interface Pin {
  /** URL of the link */
  url: string
  createdAt: string
  /** Name of link */
  text?: string
  /** An array of tags for the pin */
  tags?: string[]
  [k: string]: unknown
}

export function isPin(v: unknown): v is Pin {
  return (
    isObj(v) && hasProp(v, '$type') && v.$type === 'boo.kmark.boarditem#pin'
  )
}

export function validatePin(v: unknown): ValidationResult {
  return lexicons.validate('boo.kmark.boarditem#pin', v)
}
