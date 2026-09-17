import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// 180x180 standard Apple Touch Icon dimension
export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)',
          borderRadius: '40px',
          padding: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: '76px',
            fontWeight: 900,
            fontFamily: 'sans-serif',
            letterSpacing: '-4px',
          }}
        >
          <span>R</span>
          <span style={{ color: '#a5b4fc', marginLeft: '-2px' }}>NG</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
