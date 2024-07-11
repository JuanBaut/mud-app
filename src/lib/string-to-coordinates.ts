export default function stringToLatLng(
  waypoint: string | undefined,
): [number, number] | undefined {
  if (waypoint) {
    const coords = waypoint.split(", ").map(Number);
    if (coords.length === 2) {
      const lat = coords[0];
      const lng = coords[1];
      return [lat, lng];
    }
  }
}
