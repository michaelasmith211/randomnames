import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Random Name Generator - Generate Random Names Instantly';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #1e1b4b, #312e81, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              backgroundColor: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 800,
              color: 'white',
            }}
          >
            RNG
          </div>
          <span style={{ fontSize: '32px', color: '#a5b4fc', fontWeight: 600 }}>
            randomnamegenerator.dev
          </span>
        </div>

        <div
          style={{
            fontSize: '64px',
            fontWeight: 900,
            textAlign: 'center',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            maxWidth: '1000px',
            marginBottom: '24px',
          }}
        >
          Random Name Generator
        </div>

        <div
          style={{
            fontSize: '28px',
            color: '#cbd5e1',
            textAlign: 'center',
            maxWidth: '850px',
            lineHeight: 1.4,
          }}
        >
          Generate random names instantly for characters, fantasy stories, gamer handles, babies, and businesses.
        </div>

        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '40px',
          }}
        >
          {['100% Free', 'Client-Side & Private', '20+ Global Cultures', 'Fantasy & D&D Engine'].map((tag) => (
            <div
              key={tag}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '9999px',
                padding: '10px 24px',
                fontSize: '18px',
                color: '#e2e8f0',
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
