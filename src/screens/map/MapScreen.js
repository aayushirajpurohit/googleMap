import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from 'react-native-geolocation-service';
const MapScreen = () => {
    const apiKey = 'AIzaSyCm6K4I4lwdlEARkJx2TNujo3kt7Ci6emU';
    const [region, setRegion] = useState({
        // latitude: 22.7196,
        // longitude: 75.8577,
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421,
    });
    const [searchAddress, setSearchAddress] = useState("indore")
    const [addressDetail, setAddressDetail] = useState("")
    const [destination, setDestination] = useState({
        // latitude: 22.7512,
        // longitude: 75.8895,
        // latitudeDelta: 0.0922,
        // longitudeDelta: 0.0421,
    })
    useEffect(() => {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log('Current position:', position);
            setRegion({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            });
           
          },
          (error) => {
            console.log('Geolocation error:', error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
       
      }, []);
    // useEffect(() => {
    //     // Your code to fetch and update region based on searchAddress
    //     const onSearch = async () => {
    //         const apiKey = 'AIzaSyCm6K4I4lwdlEARkJx2TNujo3kt7Ci6emU';
    //         // const searchAddress = searchAddress
    
    //         try {
    //             const response = await fetch(
    //                 `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchAddress)}&key=${apiKey}`
    //             );
    
    //             const data = await response.json();
    
    //             if (data.results.length > 0) {
    //                 const { lat, lng } = data.results[0].geometry.location;
    //                 const searchedRegion = {
    //                     latitude: lat,
    //                     longitude: lng,
    //                     latitudeDelta: 0.0922,
    //                     longitudeDelta: 0.0421,
    //                 };
    //                 console.log("searchAddress", searchAddress, searchedRegion);
    //                 setRegion(searchedRegion);
    //                 mapRef.current.animateToRegion(searchedRegion, 1000);
    //             } else {
    //                 Alert.alert('Address not found', 'Please enter a valid address.');
    //             }
    //         } catch (error) {
    //             console.error('Error fetching geocoding data:', error);
    //             Alert.alert('Error', 'An error occurred while fetching location data.');
    //         }
    //     };
    //     onSearch()
    //   }, [searchAddress]);
   

      const onSearch = async () => {
       
        // const searchAddress = searchAddress

        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchAddress)}&key=${apiKey}`
            );

            const data = await response.json();

            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                const searchedRegion = {
                    latitude: lat,
                    longitude: lng,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                };
                console.log("searchAddress", searchAddress, searchedRegion);
                setDestination(searchedRegion);
                mapRef.current.animateToRegion(searchedRegion, 1000);
            } else {
                setDestination({})
                Alert.alert('Address not found', 'Please enter a valid address.');
            }
        } catch (error) {
            console.error('Error fetching geocoding data:', error);
            Alert.alert('Error', 'An error occurred while fetching location data.');
        }
    };
    const addressDetails = async () => {
        console.log("region details",region);
        // const searchAddress = searchAddress

        try {
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=${apiKey}`
            );

            const data = await response.json();

            if (data?.results?.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                console.log("addresss details",data?.results[0]?.formatted_address);
                addressCurrent=data?.results[0]?.formatted_address
                setAddressDetail(addressCurrent)
                // const searchedRegion = {
                //     latitude: lat,
                //     longitude: lng,
                //     latitudeDelta: 0.0922,
                //     longitudeDelta: 0.0421,
                // };
                // console.log("searchAddress", searchAddress, searchedRegion);
                // // setDestination(searchedRegion);
                // mapRef.current.animateToRegion(searchedRegion, 1000);
            } 
            // else {
            //     Alert.alert('current Address not found');
            // }
        } catch (error) {
            console.error('Error fetching geocoding data:', error);
            Alert.alert('Error', 'An error occurred while fetching location data.');
        }
    };
    const mapRef = React.useRef(null);

    return (
        <SafeAreaView style={{ flex: 1 }}>
     

     <KeyboardAvoidingView   keyboardShouldPersistTaps="handled"  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.scrollViewContent}> 
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search location"
                        onChangeText={(text) => { setSearchAddress(text) }}
                      
                    />
                    <Button title="Search" onPress={onSearch} />
                </View>
                </KeyboardAvoidingView>
            <View style={styles.container}>
        
                <MapView
                    ref={mapRef}
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                    initialRegion={region}
                    // onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
                >
                    <Marker
                        coordinate={{
                            latitude: region.latitude,
                            longitude: region.longitude,
                        }}
                        title={`Current location`}
                        description={`${addressDetail}`}
                        onPress={ region &&   addressDetails()}
                        // style={{coloe:'yellow'}}
                        // image={{uri: 'custom_pin'}}
                        pinColor={'blue'}
                    />
                     <Marker
                        coordinate={{
                            latitude: destination.latitude,
                            longitude: destination.longitude,
                        }}
                        title={`Search: ${searchAddress}`}
                        description={'Searching for the area'}
                        // style={{coloe:'yellow'}}
                        // image={{uri: 'custom_pin'}}
                        onPress={ region &&   addressDetails()}
                        pinColor={'yellow'}
                    />
                    {/* <Marker
                        coordinate={{
                            latitude: 22.7512,
                            longitude: 75.8895,
                        }}
                        title={'Sayaji hotel indore'}
                        description={'This is the selected location'}
                    />
                    <Marker
                        coordinate={{
                            latitude: 22.7501,
                            longitude: 75.9028,
                        }}
                        title={'radisson hotel indore'}
                        description={'radisson hotel indore Location'}
                    /> */}
                    {/* <Polyline
                coordinates={[region, destination]}
                strokeColor="#000" // Set the color for the path
                strokeWidth={2}
              /> */}
                    {/* <Polyline
                        coordinates={[
                            { latitude: 22.7501, longitude: 75.9028 },
                            { latitude: 22.7512, longitude: 75.8895 },
                            { latitude: region.latitude, longitude: region.longitude },
                            //   {latitude: 37.7734153, longitude: -122.4577787},
                            //   {latitude: 37.7948605, longitude: -122.4596065},
                            //   {latitude: 37.8025259, longitude: -122.4351431},
                        ]}
                        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={[
                            '#238C23',
                            '#7F0000',
                            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                            '#B24112',
                            '#7F0000',

                        ]}
                        strokeWidth={6}
                    /> */}
                     <MapViewDirections
                origin={region}
                destination={destination}
                apikey={apiKey}
                strokeWidth={3}
                strokeColor="hotpink"
                onReady={(result) => {
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
                  });
                }}
              />
                </MapView>
              
            </View>
           
        </SafeAreaView>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },

    mapStyle: {
        
        ...StyleSheet.absoluteFillObject,
    },
    scrollViewContent: {
        // flexGrow: 1,
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    
    searchContainer: {
        flexDirection: 'row',
        //  alignItems: 'center',
        // justifyContent: 'space-between',
        padding: 16,
        backgroundColor: 'white',
        elevation: 4,
    },
    searchInput: {
        flex: 1,
        marginRight: 8,
        padding: 8,
        borderColor: 'gray',
        borderWidth: 1,
        // borderRadius: 8,
    },
});
