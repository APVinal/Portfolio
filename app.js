'use strict';

const appState ={
  profileToggle: false,
  portfolioToggle: false,
  defaultToggle: true
};

function changeDefault(state){
  state.portfolioToggle = false;
  state.profileToggle = false;
  return state.defaultToggle = true;
}

function changeProfile(state){
  state.portfolioToggle = false;
  state.defaultToggle = false;
  return state.profileToggle = true;
}

function changePortfolio(state){
  state.profileToggle = false;
  state.defaultToggle = false;
  return state.portfolioToggle = true;
}

function render(state, profile, portfolio, main){
  if(state.profileToggle){
    profile.show();
  }else{
    profile.hide();
  }
  if(state.portfolioToggle){
    portfolio.show();
  }else{
    portfolio.hide();
  }if(state.defaultToggle){
    main.show();
  }else{
    main.hide();
  }
}

$(function(){
  render(appState, $('.profile-info'), $('.portfolio-info'), $('.default-body'));

  $('.profile').on('click', function(event){
    changeProfile(appState);
    render(appState, $('.profile-info'), $('.portfolio-info'), $('.default-body'));
  });

  $('.portfolio').on('click', function(event){
    changePortfolio(appState);
    render(appState, $('.profile-info'), $('.portfolio-info'), $('.default-body'));
  });

  $('.logo').on('click', function(event){
    changeDefault(appState);
    render(appState, $('.profile-info'), $('.portfolio-info'), $('.default-body'));
  });
});