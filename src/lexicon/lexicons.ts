/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { LexiconDoc, Lexicons } from '@atproto/lexicon'

export const schemaDict = {
  BooKmarkBoard: {
    lexicon: 1,
    id: 'boo.kmark.board',
    defs: {
      main: {
        type: 'record',
        description: 'Record of a board of bookmarks',
        record: {
          type: 'object',
          required: ['bookmarks', 'createdAt'],
          properties: {
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
            bookmarks: {
              type: 'array',
              description: 'an array of bookmarks',
              items: {
                type: 'ref',
                ref: 'lex:boo.kmark.board#pin',
              },
            },
          },
        },
      },
      pin: {
        type: 'object',
        description: 'a record of a bookmark',
        required: ['url'],
        properties: {
          url: {
            type: 'string',
            format: 'uri',
            description: 'the url of the bookmark',
          },
          text: {
            type: 'string',
            description: 'optional text for bookmark',
          },
          tags: {
            type: 'array',
            description: 'an array of tags assigned to bookmark',
            items: {
              type: 'string',
            },
          },
        },
      },
    },
  },
  AppBskyActorProfile: {
    lexicon: 1,
    id: 'app.bsky.actor.profile',
    defs: {
      main: {
        type: 'record',
        description: 'A declaration of a Bluesky account profile.',
        key: 'literal:self',
        record: {
          type: 'object',
          properties: {
            displayName: {
              type: 'string',
              maxGraphemes: 64,
              maxLength: 640,
            },
            description: {
              type: 'string',
              description: 'Free-form profile description text.',
              maxGraphemes: 256,
              maxLength: 2560,
            },
            avatar: {
              type: 'blob',
              description:
                "Small image to be displayed next to posts from account. AKA, 'profile picture'",
              accept: ['image/png', 'image/jpeg'],
              maxSize: 1000000,
            },
            banner: {
              type: 'blob',
              description:
                'Larger horizontal image to display behind profile view.',
              accept: ['image/png', 'image/jpeg'],
              maxSize: 1000000,
            },
            labels: {
              type: 'union',
              description:
                'Self-label values, specific to the Bluesky application, on the overall account.',
              refs: ['lex:com.atproto.label.defs#selfLabels'],
            },
            joinedViaStarterPack: {
              type: 'ref',
              ref: 'lex:com.atproto.repo.strongRef',
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
  XyzStatusphereStatus: {
    lexicon: 1,
    id: 'xyz.statusphere.status',
    defs: {
      main: {
        type: 'record',
        key: 'tid',
        record: {
          type: 'object',
          description: 'status emoji',
          required: ['status', 'createdAt'],
          properties: {
            status: {
              type: 'string',
              minLength: 1,
              maxGraphemes: 1,
              maxLength: 32,
            },
            createdAt: {
              type: 'string',
              format: 'datetime',
            },
          },
        },
      },
    },
  },
}
export const schemas: LexiconDoc[] = Object.values(schemaDict) as LexiconDoc[]
export const lexicons: Lexicons = new Lexicons(schemas)
export const ids = {
  BooKmarkBoard: 'boo.kmark.board',
  AppBskyActorProfile: 'app.bsky.actor.profile',
  XyzStatusphereStatus: 'xyz.statusphere.status',
}
