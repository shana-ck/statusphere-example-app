import pino from 'pino'
import { IdResolver } from '@atproto/identity'
import { Firehose } from '@atproto/sync'
import { Jetstream, CommitType } from '@skyware/jetstream'
import WebSocket from 'ws'
import type { Database } from '#/db'
import * as Status from '#/lexicon/types/xyz/statusphere/status'
import * as Board from '#/lexicon/types/boo/kmark/board'

export function createIngester(db: Database, idResolver: IdResolver) {
  const logger2 = pino({name: 'jetstream ingestion'})
  return new Jetstream({
    ws: WebSocket,
    wantedCollections: ['boo.kmark.*', 'xyz.statusphere.*']
  })

    
  }

  // const logger = pino({ name: 'firehose ingestion' })
  // return new Firehose({
  //   idResolver,
  //   handleEvent: async (evt) => {
  //     // Watch for write events
  //     if (evt.event === 'create' || evt.event === 'update') {
  //       const now = new Date()
  //       const record = evt.record
  //       if (
  //         evt.collection === 'boo.kmark.board' &&
  //         Board.isRecord(record) &&
  //         Board.validateRecord(record).success
  //       ) {
  //         await db
  //         .insertInto('board')
  //         .values({
  //           uri: evt.uri.toString(),
  //           authorDid: evt.did,
  //           board: record.board,
  //           createdAt: record.createdAt,
  //           indexedAt: now.toISOString(),
  //         })
  //         .onConflict((oc) =>
  //           oc.column('uri').doUpdateSet({
  //             board: record.board,
  //             indexedAt: now.toISOString(),
  //           })
  //         )
  //         .execute()
  //       }

  //       // If the write is a valid status update
  //       if (
  //         evt.collection === 'xyz.statusphere.status' &&
  //         Status.isRecord(record) &&
  //         Status.validateRecord(record).success
  //       ) {
  //         // Store the status in our SQLite
  //         await db
  //           .insertInto('status')
  //           .values({
  //             uri: evt.uri.toString(),
  //             authorDid: evt.did,
  //             status: record.status,
  //             createdAt: record.createdAt,
  //             indexedAt: now.toISOString(),
  //           })
  //           .onConflict((oc) =>
  //             oc.column('uri').doUpdateSet({
  //               status: record.status,
  //               indexedAt: now.toISOString(),
  //             })
  //           )
  //           .execute()
  //       }
  //     } else if (
  //       evt.event === 'delete' &&
  //       evt.collection === 'xyz.statusphere.status'
  //     ) {
  //       // Remove the status from our SQLite
  //       await db.deleteFrom('status').where('uri', '=', evt.uri.toString()).execute()
  //     }
  //   },
  //   onError: (err) => {
  //     logger.error({ err }, 'error on firehose ingestion')
  //   },
  //   filterCollections: ['xyz.statusphere.status', 'boo.kmark.board'],
  //   excludeIdentity: true,
  //   excludeAccount: true,
  // })

