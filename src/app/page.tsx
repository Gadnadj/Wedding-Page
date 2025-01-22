import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/fr'); // Redirection vers le français par défaut
}
