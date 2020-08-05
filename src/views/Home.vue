<template>
    <div id="home">
        <Header/>
        <h1>Любимые булочные Северной Столицы</h1>
        <div id="map">
            <div id="napkin">
                <yandex-map :settings=settings :coords=markers[selected] :zoom=16>
                    <ymap-marker v-for="(value, i) in markers" v-bind:key=i
                        marker-id=i
                        :coords=value
                        :icon=markerIcon
                        @click="selectOnMap(i)"
                    />
                </yandex-map>
            </div>
            <AddressList v-on:selected="selectMarker" v-bind:selectedNew="selected" />
        </div>
        <br>
    </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import Header from "@/components/Header.vue";
import AddressList from "@/components/AddressList.vue";

export default {
    name: "Home",
    components: {
        Header,
        yandexMap,
        ymapMarker,
        AddressList
    },
    data() {
        return {
            selected: 1,
            nearest: 10,
            settings: {
                apiKey: '40a5e665-b4d4-4f22-8443-0482b3e0053d',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1'
            },
            markers: {
                '1': [60.019534, 30.268610],
                '2': [60.040288, 30.398212],
                '3': [59.983603, 30.215427],
                '4': [60.022674, 30.240786],
                '5': [59.932976, 30.368614],
                '6': [59.953303, 30.415903],
                '7': [60.004088, 30.300681],
                '8': [60.038039, 30.326816],
                '9': [59.970499, 30.341647],
                '10': [59.938549, 30.355006],
                '11': [59.962553, 30.352343],
                '12': [59.982757, 30.346958],
                '13': [59.957663, 30.307750],
                '14': [59.864632, 30.319245],
                '15': [59.927508, 30.350922],
                '16': [60.052189, 30.314933],
                '17': [59.934856, 30.378606],
                '18': [60.038839, 30.405275],
                '19': [59.994016, 30.310741],
                '20': [59.959597, 30.415967],
                '21': [59.836469, 30.351999],
                '22': [60.040347, 30.324675],
                '23': [59.943110, 30.275743],
                '24': [59.952298, 30.297081],
                '25': [59.914175, 30.449498],
                '26': [59.927354, 30.316987],
                '27': [59.921173, 30.353383],
                '28': [59.926731, 30.307987],
                '29': [59.927828, 30.407583],
                '30': [59.832788, 30.203817],
                '31': [59.925929, 30.342349],
                '32': [59.963367, 30.302220],
                '33': [59.958633, 30.288242],
                '34': [59.866481, 30.264656],
                '35': [59.915880, 30.314319],
                '36': [59.960433, 30.290667],
                '37': [59.959355, 30.295555],
                '38': [60.017525, 30.315038],
                '39': [59.922243, 30.307789],
                '40': [59.910719, 30.297352],
                '41': [59.899427, 30.275482],
                '42': [59.922892, 30.350467],
                '43': [59.945306, 30.361815],
                '44': [59.930193, 30.319261],
                '45': [59.938186, 30.369766],
                '46': [59.956828, 30.485993],
                '47': [59.921102, 30.491868],
                '48': [59.940178, 30.281666],
                '49': [59.935899, 30.363927],
                '50': [59.903951, 30.469366],
                '51': [59.924953, 30.415569],
                '52': [59.897988, 30.427450],
                '53': [59.934959, 30.310318],
                '54': [60.014588, 30.648427],
                '55': [59.938001, 30.236196],
                '56': [59.908516, 30.455867],
                '57': [59.994694, 30.318336],
                '58': [59.956973, 30.322109],
                '59': [59.867924, 30.440858],
                '60': [59.936094, 30.318888],
                '61': [59.965660, 30.314216],
                '62': [59.888725, 30.325089],
                '63': [60.051935, 30.355862],
                '64': [59.929482, 30.415728],
                '65': [59.887040, 30.268858],
                '66': [59.942060, 30.345025],
                '67': [59.867763, 30.258727],
                '68': [59.844575, 30.391391],
                '69': [59.832684, 30.389438],
                '70': [59.868641, 30.370757],
                '71': [60.031207, 30.239017],
                '72': [59.913286, 30.475319],
                '73': [59.851895, 30.331793],
                '74': [59.927575, 30.311345],

                '76': [59.944049, 30.263672],
                '77': [60.014664, 30.397912],
                '78': [59.869802, 30.259164],
                '79': [59.856644, 30.306228],
                '80': [59.963737, 30.295818],
                '81': [60.080042, 30.341946],
                '82': [60.072093, 30.336802],
                '83': [59.954363, 30.213416],
                '84': [60.101611, 29.970707],
                '85': [59.931989, 30.362188],
                '86': [59.929522, 30.242520],
                '87': [59.986464, 30.303873],
                '88': [59.966230, 30.288240],
                '89': [59.932916, 30.348294],
                '90': [59.934788, 30.335712],
                '91': [59.941562, 30.323510],
                '92': [59.922297, 30.285011],
                '93': [59.899675, 30.512551],
                '94': [59.895730, 30.425406],

                '96': [59.924251, 30.306367],
                '97': [59.940587, 30.360997],
                '98': [59.938845, 30.349567],
                '99': [60.077629, 30.343891],
                '100': [59.925493, 30.379317],
                '101': [59.946124, 30.492174],
                '102': [60.053062, 30.427300],
                '103': [60.023151, 30.220602],
                '104': [59.945505, 30.285580],

                '106': [59.964458, 30.313182],
                '107': [59.940763, 30.270929],
            },
            markerIcon: {
                layout: 'default#image',
                imageHref: require('@/assets/marker.png'),
                imageSize: [48, 48],
                imageOffset: [-10, -48]
            }
        }
    },
    methods: {
        selectMarker: function(n) {
            this.selected = n;
        },
        selectOnMap: function(n) {
            this.selected = +n;
            document.getElementById("element"+n).scrollIntoView();
        },
        pythagorean: function(sideA, sideB){
            return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
        },
        selectNearest: function(pos) {
            const coords = pos.coords;
            let selectedDistLat = this.markers[0][0] - coords.latitude;
            let selectedDistLon = this.markers[0][1] - coords.longitude;

            for (let marker of this.markers) {
                let distLat = marker[0] - coords.latitude;
                let distLon = marker[1] - coords.longitude;
                
                if (this.pythagorean(selectedDistLat, selectedDistLon) > this.pythagorean(distLat, distLon)) {
                    this.nearest = marker;
                }
            }
        }
    },
    mounted() {
        //navigator.geolocation.getCurrentPosition(this.selectNearest);
    }
};
</script>

<style scoped>
h1 {
    margin-bottom: 50px;
    margin-top: 50px;
    font-size: 5vh;
}

h4 {
    font-family: 'Playfair Display', serif;
    color: #3a3a3a;
    margin-top: 6px;
    margin-bottom: 0px;
}

.ymap-container {
    width: 600px;
    height: 600px;
    border: darkgray solid 1px;
}

#napkin {
    padding: 35px;
    background: url('../assets/napkin.png') no-repeat center;
    background-size: cover;
}

#map {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.marker {
    font-family: 'Playfair Display', serif;
    width: 100px;
    color: #000000; 
    font-weight: bold;
}

@media screen and (max-width: 1024px) {
    #map {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .ymap-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .ymap-container div {
        z-index: 0;
    }

    #napkin {
        position: relative;
        width: 100%;
        padding: 0px;
        background: none;
    }

    #napkin:after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
}
</style>
