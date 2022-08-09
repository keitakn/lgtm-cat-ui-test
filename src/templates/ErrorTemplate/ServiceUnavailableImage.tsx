import Image from 'next/image';

import serviceUnavailable from './images/service_unavailable.webp';

export const ServiceUnavailableImage = () => (
  <Image
    src={serviceUnavailable.src}
    layout="fill"
    objectFit="contain"
    alt="503 Service Unavailable"
    priority={true}
  />
);
