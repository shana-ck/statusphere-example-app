/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../lexicons'
import { isObj, hasProp } from '../../../util'
import { CID } from 'multiformats/cid'

export interface Record {
  createdAt: string
  /** Name of the board */
  name: string
  [k: string]: unknown
}

export function isRecord(v: unknown): v is Record {
  return (
    isObj(v) &&
    hasProp(v, '$type') &&
    (v.$type === 'boo.kmark.board#main' || v.$type === 'boo.kmark.board')
  )
}

export function validateRecord(v: unknown): ValidationResult {
  return lexicons.validate('boo.kmark.board#main', v)
}
