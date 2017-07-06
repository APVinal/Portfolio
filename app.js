'use strict';

const appState ={
  contentToggle: false,
  profileToggle: false,
  contactToggle: false,
  portfolioToggle: false
};

function changeContent(state){
  if(state.contentToggle){
    return state.contentToggle = false;
  }
  return state.contentToggle = true;
}

function changeProfile(state){
  if(state.profileToggle){
    return state.profileToggle = false;
  }
  return state.profileToggle = true;
}

function changeContact(state){
  if(state.contactToggle){
    return state.contactToggle = false;
  }
  return state.contactToggle = true;
}

function changePortfolio(state){
  if(state.portfolioToggle){
    return state.portfolioToggle = false;
  }
  return state.portfolioToggle = true;
}

function render(state, content, profile, contact, portfolio){
  if(state.contentToggle){
    content.removeClass('hidden');
  }else{
    content.addClass('hidden');
  }
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
  render(appState, $('.nav-bar-selection'), $('.profile-info'), $('.contact-info'), $('.portfolio-info'));

  $('.hamburger').on('click', function(event){
    changeContent(appState);
    render(appState, $('.nav-bar-selection'), $('.profile-info'), $('.contact-info'), $('.portfolio-info'));
  });

  $('.profile').on('click', function(event){
    changeProfile(appState);
    render(appState, $('.nav-bar-selection'), $('.profile-info'), $('.contact-info'), $('.portfolio-info'));
  });

  $('.contact').on('click', function(event){
    changeContact(appState);
    render(appState, $('.nav-bar-selection'), $('.profile-info'), $('.contact-info'), $('.portfolio-info'));
  });

  $('.portfolio').on('click', function(event){
    changePortfolio(appState);
    render(appState, $('.nav-bar-selection'), $('.profile-info'), $('.contact-info'), $('.portfolio-info'));
  });
});