'use strict';

const React = require('react');

const  {
    View,
    Text,
    TouchableNativeFeedback,
    StyleSheet
} = require('react-native');

const YearIcon = require('./../common/YearIcon');
const BarcampColors = require('./../common/BarcampColors');

class MenuItem extends React.Component {
    
    render() {
       let selectedTitleStyle = this.props.selected && styles.selectedTitle;
       
        return(
            <TouchableNativeFeedback>
                <View style={[styles.container]}>
                    <YearIcon year={this.props.year}
                              selected={this.props.selected}>
                    </YearIcon>
                    <Text style={[styles.title, selectedTitleStyle]}>
                        {this.props.text}
                    </Text> 
                </View>
            </TouchableNativeFeedback>
        )
    }
    
}

const styles = StyleSheet.create({
  container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        paddingLeft: 20
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: BarcampColors.darkText,
  },
  selectedTitle: {
    color: BarcampColors.selectedColor,
  },
});

module.exports = MenuItem;
    
 