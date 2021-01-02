import React from 'react'
import Head from 'next/head'
import activity from '../activity.json'
import Rings from '../components/rings'

export default () => (
  <main>
    <Head>
      <title>Reactivity Rings – @lachlanjc</title>
      <meta property="author" content="Lachlan Campbell" />
      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:description"
        content="Prototyping rendering Apple Watch Activity rings in React."
      />
      <meta property="og:title" content="Reactivity Rings" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://rings.now.sh/" />
      <meta
        property="og:description"
        content="Prototyping rendering Apple Watch Activity rings in React."
      />
      <meta
        property="description"
        content="Prototyping rendering Apple Watch Activity rings in React."
      />
    </Head>
    <h1>
      <span>Re</span>activity Rings
    </h1>
    <p>
      Prototyping rendering{' '}
      <a href="https://apple.com/watch/close-your-rings/">
        Apple Watch Activity rings
      </a>{' '}
      in React.
    </p>
    <p>
      For <a href="https://lachlanjc.me">@lachlanjc</a>’s upcoming 2019 in
      Review.
    </p>
    <ol>
      {Object.keys(activity).map((date, i) => (
        <li key={i}>
          <Rings {...activity[date]} />
          <span>{[date.split('-')[1], date.split('-')[2]].join('/')}</span>
        </li>
      ))}
    </ol>
    <footer>
      <a href="https://github.com/lachlanjc/rings">View source</a>
    </footer>
    <style jsx global>{`
      :root {
        --sans: ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
        --serif: ui-serif, Georgia, Times, serif;
        --bg: #eee;
        --elevated: #fff;
        --text: #111;
        --muted: #aaa;
        --move: #fa114f;
        --exercise: #92e82a;
        --stand: #1eeaef;
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --bg: #111;
          --elevated: #222;
          --text: #fff;
        }
      }
      * {
        box-sizing: border-box;
      }
      html {
        background-color: var(--move);
      }
      body {
        margin: 0;
      }
      main {
        background-color: var(--bg);
        color: var(--text);
        font-family: var(--sans);
        line-height: 1.375;
        min-height: 100vh;
        width: 100%;
        padding: 2rem 1rem;
      }
    `}</style>
    <style jsx>{`
      h1 {
        font-size: 4rem;
        margin-top: 0;
        margin-bottom: 2rem;
        line-height: 1;
        letter-spacing: -0.05em;
      }
      @supports (-webkit-text-stroke: currentColor) {
        h1 span {
          -webkit-text-stroke: currentColor;
          -webkit-text-stroke-width: 2px;
          -webkit-text-fill-color: transparent;
        }
        h1:hover span {
          color: var(--exercise);
        }
      }
      ol {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.5rem;
        padding: 0;
        margin: 0;
        list-style: none;
      }
      li {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: var(--elevated);
        border-radius: 0.75rem;
        padding: 0.5rem;
        font-size: 0.875rem;
      }
      li span {
        margin-left: 1rem;
      }
      p {
        font-family: var(--serif);
        margin-top: -1rem;
        margin-bottom: 2rem;
      }
      footer {
        font-size: 0.875rem;
        margin-top: 4rem;
        text-align: center;
      }
      a {
        color: inherit;
        text-decoration-line: underline;
        text-underline-position: under;
      }
      a:focus,
      a:hover {
        color: var(--stand);
      }
      @media (min-width: 28em) {
        ol {
          grid-template-columns: repeat(7, 1fr);
          grid-gap: 1rem;
        }
        li {
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        li span {
          margin-left: 0;
          margin-top: 0.5rem;
        }
      }
      @media (min-width: 32em) {
        main {
          padding: 4rem 2rem;
        }
        li {
          padding: 1rem 2rem;
        }
        footer {
          padding-bottom: 0;
        }
      }
      @media (min-width: 108em) {
        label {
          padding: 2rem 3rem;
        }
      }
    `}</style>
  </main>
)
