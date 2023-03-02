import React from "react";
import Card from "./Card";

const Grid = () => {
    return (
        <div className="Grid">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>   
                </thead>
                <tbody>
                <tr>
                    <td className="row"></td>
                    <td><Card title="Sodoi Coffee Tasting House" address="2438 Durant Ave, Berkeley, CA 94704" menu_link="https://m.yelp.com/biz/sodoi-coffee-tasting-house-berkeley-2" image_src="https://sodoicoffee.com/wp-content/uploads/2015/03/20161219_124842-1024x576.jpg"/></td>
                    <td><Card title="Yali's Café" address="1920 Oxford St, Berkeley, CA 94704" menu_link="http://www.yaliscafe.com/" image_src="https://images.squarespace-cdn.com/content/v1/5968430ecf81e04b298689da/1519687152308-GYTTO3AAKOCDDSRIIP27/Yalis-1.jpg"/></td> 
                    <td><Card title="1951 Coffee Company" address="2410 Channing Way, Berkeley, CA 94704" menu_link="https://food.google.com/chooseprovider?restaurantId=/g/11c6ltfl4g&g2lbs=ALIxsqpE_Gi3_xYgHKabMwEPtuJq2Nd1_uyjrhRIL9LiOzqzIQnAM0E0fCuVFcpO3cHMbkEnM2OwIa_JeL0SB0YkDa6Vs7UbTnL4yx6BNYBvSrg5X2sdVTs%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=ElAAZKv0Gt6tqtsPi_aDqA4&ei=ElAAZKv0Gt6tqtsPi_aDqA4&fo_s=OA,AH&sei=CfQU6yBp2Wq8EXuB4Lzen4q_&utm_campaign&utm_source=search" image_src="https://images.squarespace-cdn.com/content/v1/5ed4acb310d08b7a790b66ce/1590996197673-JGVZXPOLS94HDTKHKAU1/DSC_0483.JPG?format=1500w"/></td>               
                </tr>
                <tr>
                    <td className="row"></td>
                    <td><Card title="Romeo's Coffee" address="2499 Telegraph Ave, Berkeley, CA 94704" menu_link="https://m.facebook.com/Romeos.Coffee/" image_src="https://s3.amazonaws.com/secretsaucefiles/photos/images/000/158/634/large/DSC_6965.jpg?1492450177"/></td>
                    <td><Card title="Philz Coffee" address="1313 Ninth St Suite 110, Berkeley, CA 94710" menu_link="https://food.google.com/chooseprovider?restaurantId=/g/1q6683s8j&g2lbs=ALIxsqp_RZuWjyD7jgjuzRFnjfsZE87DW3NzpHo3tbTaAiIZWZ_KOTeWJOzRqdtQRquDk4SB9aiMCFeKNO1p-BDiiwpF1glCs-CYWBqW2CmeXP16F2hhP0Q%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=eFAAZL3_Mq3P0PEPgo2S0Ac&ei=eFAAZL3_Mq3P0PEPgo2S0Ac&fo_s=OA,AH&sei=CRBB5TLbyu-uEbfv75_VQ9Pc&utm_campaign&utm_source=search" image_src="https://system.na3.netsuite.com/c.1145465/images/sca/locations/details/walnut-creek-int.jpg"/></td>
                    <td><Card title="V&A Cafe" address="2521 Hearst Ave, Berkeley, CA 94709" menu_link="https://www.vandacafeucb.com/" image_src="https://images.squarespace-cdn.com/content/v1/594bf3131e5b6cc3f34bb169/1586299433734-F2TONUZ956HYK9G87HEW/v+and+a+cafe.jpg"/></td>
                </tr>
                <tr>
                    <td className="row"></td>
                    <td><Card title="Gold Bean Cafe" address="2131 Durant Ave, Berkeley, CA 94704" menu_link="https://gldbeancafe.com/menu" image_src="http://goldbeancafe.com/wp-content/uploads/2020/06/Meeting-room-at-The-Gold-Bean-Cafe.png"/></td>
                    <td><Card title="Strada Cafe" address="2300 College Ave, Berkeley, CA 94704" menu_link="https://caffestrada.com/pages/menu" image_src="https://www.telegraphberkeley.org/wp-content/uploads/cafe-strada.jpg"/></td>
                    <td><Card title="Cafe Milano" address="2522 Bancroft Way, Berkeley, CA 94704" menu_link="http://places.singleplatform.com/cafe-milano-4/menu?ref=google" image_src="https://live.staticflickr.com/88/273653138_13de1bd49c_c.jpg"/></td>
                </tr>
                <tr>
                    <td className="row"></td>
                    <td><Card title="Goldie's Cafe" address="2495 Bancroft Way 2nd Floor, Berkeley, CA 94720" menu_link="https://www.goldiescafe.ca/" image_src="https://lh3.googleusercontent.com/p/AF1QipPBCOnrBRe_LYweM_945FlDGouhEDNBI1OTcXKy=s1360-w1360-h1020"/></td>
                    <td><Card title="Cabanas Cafe" address="1878 Euclid Ave, Berkeley, CA 94709" menu_link="https://www.cabanascafe.com/menu" image_src="https://s3-media0.fl.yelpcdn.com/bphoto/W-NKBvUYKkBsK2inK7yI-g/348s.jpg"/></td>
                    <td><Card title="Free Speech Movement Cafe" address="3rd Floor, U C, University Dr, Berkeley, CA 94720" menu_link="https://lib.berkeley.edu/about/fsm-cafe?section=menu" image_src="https://www.bridgeandtunnelclub.com/bigmap/outoftown/california/sanfrancisco/berkeley/uc-berkeley/freespeechmovementcafe/03freespeechmovementcafe.jpg"/></td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Grid;