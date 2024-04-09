import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

import useMap from '../../hooks/use-map';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  mapClassName: 'cities' | 'offer';
  city: City;
  offers: Offer[];
  cardActiveId?: Offer['id'] | null;
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

export default function Map({mapClassName, city, offers, cardActiveId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker ({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          },{
            icon: (cardActiveId && offer.id === cardActiveId)
              ? currentCustomIcon
              : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, offers, cardActiveId ]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  return (
    <section className={`${mapClassName}__map map`} ref={mapRef}>
    </section>
  );
}


