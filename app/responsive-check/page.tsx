export const metadata = { robots: { index: false, follow: false } };
export default function ResponsiveCheck() {
  return <div style={{padding:24,display:"flex",gap:24,alignItems:"flex-start"}}>{[390,320].map(width=><div key={width}><p style={{marginBottom:12}}>Viewport {width}px</p><iframe title={`Viewport ${width}px`} src="/" style={{width,height:820,border:"1px solid #bbb",display:"block"}} /></div>)}</div>;
}
