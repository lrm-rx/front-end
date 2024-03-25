import React from 'react'
import { useClientLoaderData } from 'umi';

export default function user() {
  const { data } = useClientLoaderData();
  return (
    <div>
      { data.map((v: any)=> <div key={v.id}>{v.name}</div>) }
    </div>
  );
}

export async function clientLoader() {
  const data = await fetch('/api/users').then((res)=> res.json());
  return data;
}
