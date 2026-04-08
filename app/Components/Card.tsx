interface Country {
  common: string;
  official: string;
  png: string;
  alt: string;
}

interface CardProps {
  lista: Country[];
}

export default function Card({ lista }: CardProps) {
  return (
    <div>
      {lista.map((pais) => (
        <div key={pais.common}>
          <h2>{pais.common}</h2>
          <h3>{pais.official}</h3>
          <div>
            <img src={pais.png} alt={pais.alt} />
          </div>
        </div>
      ))}
    </div>
  );
}
