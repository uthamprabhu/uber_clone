import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

const Map = () => {

  // const region = {}

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        tintColor='black'
        mapType='mutedStandard'
        showsPointsOfInterest={false}
        // initialRegion={region}
        showsUserLocation={true}
        userInterfaceStyle='light'
      >
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full available space
  },
  map: {
    flex: 1, // Ensures the MapView fills the container completely
    borderRadius: 16, // Add rounded corners if needed
  },
});
