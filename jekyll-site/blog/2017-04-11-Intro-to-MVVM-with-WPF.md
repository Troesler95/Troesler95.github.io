---
layout: article
title: Introduction to MVVM with WPF
comments: true
article_image: 
---

During my internship this past summer I was given the opportunity to learn and explore a new (to me) technology
and design architecture: Windows Presentation Foundation and the Model-View-ViewModel architecture. For those of 
you who haven't heard, WPF was Microsoft's improvement on Windows Forms for developing Windows client applications. 
One of the biggest complaints about WinForms was its lack of control over design and extensibility. WPF addresses these 
issues with a completely new presentation layer based on XML called Extensible Application Markup Language or XAML; 
but more on this later!


Previously I had only been familiar with the rock-star of the mv* world, Model-View-Controller. 
If you've ever developed web applications I'm sure you've heard of MVC. Many popular web frameworks implement this architecture:
Ruby on Rails, Django (for the most part), AngularJs, etc... MVC is much more robust than _just_ web, 
but it works out well for separating front-end and back-end logic for simultaneous development by multiple teams of programmers.
MVVM tackles these same problems except with even tighter decoupling of the view and model.
 
## The Components of MVVM
{:article-section}

As with all MV* architectures, MVVM is split into three separate categories of logic: Model, View, and ViewModel.

### Models
{:article-subsection}

Models are an easy concept to grasp. The simplest way to conceptualize them is as logical
representation of your project's _what_. Understanding the 'what' and 'why' of an application is 
very important to writing applications that matter. All too often we can get caught in the 'how's without knowing
why we're doing it to begin with! For example in a contacts application the model would be a Contact class.

Here's a _very_ simple outline of such a class in C#:

{%highlight csharp linenos=table%}
public class Contact
{
    public Contact(/*Default*/)
    {
        /*Create a new contact here!*/
    }
    
    // In actual code, we wouldn't want these to be all string datatypes, 
    // but it works for illistrative purposes!
    public string Name { get; set; }
    
    public string Address { get; set; }
    
    public string PhoneNumber { get; set;}
}
{%endhighlight%}

## Why Choose WPF and MVVM?
{:.article-section}


I've seen this question asked over and over on StackOverflow. The answer, as is the solution for most subjective
questions, is: it depends! MVVM isn't the end-all solution to all of your problems and neither are any of its
MV* counterparts! Your choice of architecture is dependent on many factors, such as:

* Development environment
* Team size
* Complexity of the application

This of course is nowhere near an exhaustive list, but are among the most important!
