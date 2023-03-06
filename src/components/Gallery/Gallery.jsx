import React from "react";
import './Gallery.css'
import Title from "../commons/Title/Title";

function Gallery() {

  return (
    <div>
        <Title title='Our Masterpieces'/>
        <div className='container bg-gallery'>
          <div className="row">
              <img src="https://images.unsplash.com/photo-1584714553526-15c9ea4ce83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 1" style={{height:'200px', width:'320px'}}/>
              <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80" className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 2" style={{height:'200px', width:'320px'}}/>
              <img src="https://images.unsplash.com/photo-1583937443566-6fe1a1c6e400?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 3" style={{height:'200px', width:'320px'}}/>
              <img src="https://images.unsplash.com/photo-1605100804567-1ffe942b5cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 4" style={{height:'200px', width:'320px'}}/>
            
          </div>
          <div className="row">
              <img src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80" className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 1" style={{height:'200px', width:'320px'}}/>
              <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 2" style={{height:'200px', width:'320px'}}/>
              <img src="https://images.unsplash.com/photo-1583937443325-97becde478a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 3" style={{height:'200px', width:'320px'}}/>
              <img src="https://images.unsplash.com/photo-1583937443351-f2f669fbe2cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className='gallery-img col-lg-3 col-sm-12 col-md-6' alt="Diamond 4" style={{height:'200px', width:'320px'}}/>
          </div>
        </div>
    </div>
  );
}

export default Gallery;