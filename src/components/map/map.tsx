import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';

import useMap from '../../hooks/use-map';
import {CityMap} from '../../types/city-map';
import {Offer} from '../../types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps = {
  city: CityMap;
  offers: Offer;
  cardHoverId: string | null;
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

export default function Map({city, offers, cardHoverId}: MapProps): JSX.Element {

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
            icon: (cardHoverId !== undefined && offer.id === cardHoverId)
              ? currentCustomIcon
              : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, offers, cardHoverId ]);

  return (
    <section className="cities__map map" ref={mapRef}>
    </section>
  );
}


