/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from '@atproto/lexicon'
import { lexicons } from '../../../lexicons'
import { isObj, hasProp } from '../../../util'
import { CID } from 'multiformats/cid'

export interface Record {
  createdAt: string
  board: string
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

/** a record of a bookmark */
export interface Pin {
  /** the url of the bookmark */
  url: string
  /** optional text for bookmark */
  text?: string
  /** an array of tags assigned to bookmark */
  tags?: string[]
  [k: string]: unknown
}

export function isPin(v: unknown): v is Pin {
  return isObj(v) && hasProp(v, '$type') && v.$type === 'boo.kmark.board#pin'
}

export function validatePin(v: unknown): ValidationResult {
  return lexicons.validate('boo.kmark.board#pin', v)
}
