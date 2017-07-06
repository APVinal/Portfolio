'use strict';

const appState ={
  profileToggle: false,
  contactToggle: false,
  portfolioToggle: false
};

function changeProfile(state){
  state.portfolioToggle = false;
  state.contactToggle = false;
  if(state.profileToggle){
    return state.profileToggle = false;
  }
  return state.profileToggle = true;
}

function changeContact(state){
  state.portfolioToggle = false;
  state.profileToggle = false;
  if(state.contactToggle){
    return state.contactToggle = false;
  }
  return state.contactToggle = true;
}

function changePortfolio(state){
  state.profileToggle = false;
  state.contactToggle = false;
  if(state.portfolioToggle){
    return state.portfolioToggle = false;
  }
  return state.portfolioToggle = true;
}

function render(state, profile, contact, portfolio){
  if(state.profileToggle){
    profile.show();
  }else{
    profile.hide();
  }
  if(state.contactToggle){
    contact.show();
  }else{
    contact.hide();
  }
  if(state.portfolioToggle){
    portfolio.show();
  }else{
    portfolio.hide();
  }
}

$(function(){
  render(appState, $('.profile-info'), $('.contact-info'), $('.portfolio-info'));

  $('.profile').on('click', function(event){
    changeProfile(appState);
    render(appState, $('.profile-info'), $('.contact-info'), $('.portfolio-info'));
  });

  $('.contact').on('click', function(event){
    changeContact(appState);
    render(appState, $('.profile-info'), $('.contact-info'), $('.portfolio-info'));
  });

  $('.portfolio').on('click', function(event){
    changePortfolio(appState);
    render(appState, $('.profile-info'), $('.contact-info'), $('.portfolio-info'));
  });
});