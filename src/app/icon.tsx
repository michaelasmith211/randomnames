import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// 48x48 is the official Google Search recommended favicon dimension
export const size = {
  width: 48,
  height: 48,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)',
          borderRadius: '12px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '22px',
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-1.5px',
          }}
        >
          <span>R</span>
          <span style={{ color: '#a5b4fc', marginLeft: '-1px' }}>N</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
