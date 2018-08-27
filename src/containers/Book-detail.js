import React from 'react';
import {connect} from 'react-redux';

class BookDetail extends React.Component{
    render(){
        if(!this.props.book) 
            return null;
        return (
            <div>
                <h3>{this.props.book.title} </h3>
                <div>Description: {this.props.book.detail}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        book: state.ActiveBook
    };
}


export default connect(mapStateToProps)(BookDetail);