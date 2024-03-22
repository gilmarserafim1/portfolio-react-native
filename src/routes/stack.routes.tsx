import { createStackNavigator } from "@react-navigation/stack";
import { Main } from "../screens/Main/Main";
import { Skills } from "../screens/Skills/Skills";

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes(){
    return (
        <Navigator>

            <Screen 
                name="main"
                component={Main}
                options={{
                    headerShown: false
                }}/>

            <Screen
                name="skills"
                component={Skills}
                options={{
                    title: 'Skills',
                }}/>

        </Navigator>
    );
}