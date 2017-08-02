---
layout: article
title: First Test Post
comments: true
profile_image: "profile1.jpg"
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qualem igitur hominem natura inchoavit? Quamquam haec quidem praeposita recte et reiecta dicere licebit. Qualem igitur hominem natura inchoavit? Nihil acciderat ei, quod nollet, nisi quod anulum, quo delectabatur, in mari abiecerat. Portenta haec esse dicit, neque ea ratione ullo modo posse vivi; Nihilne est in his rebus, quod dignum libero aut indignum esse ducamus? Sed tamen enitar et, si minus multa mihi occurrent, non fugiam ista popularia. Ita fit cum gravior, tum etiam splendidior oratio. Duo Reges: constructio interrete.


Cum id fugiunt, re eadem defendunt, quae Peripatetici, verba. Suam denique cuique naturam esse ad vivendum ducem. Quae quidem vel cum periculo est quaerenda vobis; Istam voluptatem perpetuam quis potest praestare sapienti? Ut placet, inquit, etsi enim illud erat aptius, aequum cuique concedere. Quicquid porro animo cernimus, id omne oritur a sensibus; Sed quid sentiat, non videtis. Non quam nostram quidem, inquit Pomponius iocans; Vidit Homerus probari fabulam non posse, si cantiunculis tantus irretitus vir teneretur; Qui non moveatur et offensione turpitudinis et comprobatione honestatis? Non ego tecum iam ita iocabor, ut isdem his de rebus, cum L. Sed quid sentiat, non videtis.


Quid autem habent admirationis, cum prope accesseris? Obsecro, inquit, Torquate, haec dicit Epicurus? Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Quoniam, si dis placet, ab Epicuro loqui discimus. Negat esse eam, inquit, propter se expetendam. Sin kakan malitiam dixisses, ad aliud nos unum certum vitium consuetudo Latina traduceret. Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus;


Hoc ipsum elegantius poni meliusque potuit. Aufert enim sensus actionemque tollit omnem. Tum Torquatus: Prorsus, inquit, assentior; Ut optime, secundum naturam affectum esse possit. Laboro autem non sine causa; 


Apparet statim, quae sint officia, quae actiones. Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres. Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur? Ergo et avarus erit, sed finite, et adulter, verum habebit modum, et luxuriosus eodem modo. Ut proverbia non nulla veriora sint quam vestra dogmata. Hic nihil fuit, quod quaereremus. Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Item de contrariis, a quibus ad genera formasque generum venerunt. 

{% highlight xml linenos=table %}
<ListView Grid.Column="0" Grid.ColumnSpan="12"
          Grid.Row="0"
          ItemsSource="{Binding Source={StaticResource cvs}}"
          BorderThickness="0">
<ListBox.GroupStyle>
    <GroupStyle>
        <GroupStyle.HeaderTemplate>
            <DataTemplate>
                <Border HorizontalAlignment="Stretch"
                        BorderBrush="Black" BorderThickness="0,0,0,1">
                    <TextBlock FontSize="24" Text="{Binding Path=Name}"
                               Foreground="Black" Margin="8,0,0,0"/>
                </Border>
            </DataTemplate>
        </GroupStyle.HeaderTemplate>
        <GroupStyle.ContainerStyle>
            <Style TargetType="{x:Type GroupItem}">
                <Setter Property="Background" Value="White" />
                <Setter Property="Foreground" Value="White" />
            </Style>
        </GroupStyle.ContainerStyle>
    </GroupStyle>
</ListBox.GroupStyle>
<ListView.ItemTemplate>
    <DataTemplate>
        <StackPanel Orientation="Horizontal">
            <Image/>
            <TextBlock Text="{Binding FullName}" Foreground="Black"/>
        </StackPanel>
    </DataTemplate>
</ListView.ItemTemplate>
</ListView>
{% endhighlight %}

{% highlight csharp lineno=table %}
namespace ContactsApp.ViewModels
{
    class ContactListViewModel : ViewModelBase
    {
        private ObservableCollection<Contact> _contactList = null;
    
        public ContactListViewModel() : base()
        {
            _contactList = new ObservableCollection<Contact> {
                new Contact("Bob Barker"),
                new Contact("Joe Dentinger"),
                new Contact("Alison Bjorker")
            };
        }
    
        public ObservableCollection<Contact> ContactList
        {
            get { return this._contactList; }
            set { this._contactList = value; }
        }
    }
}
{% endhighlight %}