import { Meteor } from 'meteor/meteor';

MetaObject = new Meteor.Collection('MetaObjects');

Meteor.startup(() => {
	Konsistent.start(MetaObject);
});
