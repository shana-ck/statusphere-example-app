import type { Status } from '#/db'
import { html } from '../lib/view'
import { shell } from './shell'
import type { Board } from '#/db'
import { json } from 'body-parser'


const TODAY = new Date().toDateString()


const STATUS_OPTIONS = [
  '👍',
  '👎',
  '💙',
  '🥹',
  '😧',
  '😤',
  '🙃',
  '😉',
  '😎',
  '🤓',
  '🤨',
  '🥳',
  '😭',
  '😤',
  '🤯',
  '🫡',
  '💀',
  '✊',
  '🤘',
  '👀',
  '🧠',
  '👩‍💻',
  '🧑‍💻',
  '🥷',
  '🧌',
  '🦋',
  '🚀',
]

type Props = {
  statuses: Status[]
  didHandleMap: Record<string, string>
  profile?: { displayName?: string }
  myStatus?: Status
  boards: Board[]
  myBoard?: Board
}

export function home(props: Props) {
  return shell({
    title: 'Home',
    content: content(props),
  })
}

function content({ statuses, didHandleMap, profile, myStatus, myBoard, boards }: Props) {
  return html`<div id="root">
    <div class="error"></div>
    <div id="header">
      <h1>KMARKS.BOO</h1>
      <p>Share and maintain bookmark boards</p>
    </div>
    <div class="container">
      <div class="card">
        ${profile
          ? html`<form action="/logout" method="post" class="session-form">
              <div>
                Hi, <strong>${profile.displayName || 'friend'}</strong>. What are you looking for today?
              </div>
              <div>
                <button type="submit">Log out</button>
              </div>
            </form>`
          : html`<div class="session-form">
              <div><a href="/login">Log in</a> to create and view your bookmark boards!</div>
              <div>
                <a href="/login" class="button">Log in</a>
              </div>
            </div>`}
      </div>
      <div class="container">
      <form action="/board" method="post">
      <div class="form-group">
        <label for="name">Board Name</label>
        <input type="text" class="form-input" name="name">
        <button type="submit">Create New Board</button>
        </div>
      </form>
      </div>
      ${boards.map((board, i) => {
        const handle = didHandleMap[board.authorDid] || board.authorDid
        const date = ts(board)
        return html`

            <div class="card">
            <form action="/deleteboard" method="POST" enctype="application/x-www-form-urlencoded"><input type="hidden" name="_method" value="DELETE"><input type="hidden" name="id" value=${board.uri}><button type="submit" class="close-icon">x</button> </form>
            </div>
            <div class="content">
              <a class="author" href=${toBskyLink(handle)}>@${handle}</a>
              ${date === TODAY
                ? ` created a new board ${board.name} today`
                : ` created a new board ${board.name} on ${date}`}
            </div>
        `
      })}
    </div>
  </div>`
}


function toBskyLink(did: string) {
  return `https://bsky.app/profile/${did}`
}

function ts(board: Board) {
  console.log(board.uri)
  const createdAt = new Date(board.createdAt)
  const indexedAt = new Date(board.indexedAt)
  if (createdAt < indexedAt) return createdAt.toDateString()
  return indexedAt.toDateString()
}

