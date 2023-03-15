/// <reference types="@types/google.maps" />

// instruction on every object
// on how they can be an argument to 'addMarker
export interface Loctionable {
    location: {
        lat: number;
        lng: number;
    };
    markerDescription(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(elId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elId), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0,
            },
            zoomControl: true,
        });
    }

    addMarker(mappable: Loctionable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },
        });

        marker.addListener('click', (): void => {
            new google.maps.InfoWindow({
                content: mappable.markerDescription(),
            }).open(this.googleMap, marker);
        });
    }
}
