using DevExpress.Persistent.Base;
using DevExpress.Persistent.BaseImpl;
using DevExpress.Xpo;
using System;
using System.Collections.Generic;
using System.Text;

namespace GOV_podatnicy_VAT.Module.BusinessObjects
{
    [DefaultClassOptions]
    [NavigationItem("Entities")]
    public class Entity : BaseObject
    {
        public Entity(Session session) : base(session) { }
        [Action(Caption = "Set has virtual accounts", TargetObjectsCriteria = "Not [hasVirtualAccounts]")]
        public void HasVirtualAccountsTrue()
        {
            hasVirtualAccounts = true;
            
        }
        string name;
        public string Name
        {
            get { return name; }
            set { SetPropertyValue(nameof(Name), ref name, value); }
        }
        string nip;
        public string Nip
        {
            get { return nip; }
            set { SetPropertyValue(nameof(Nip), ref nip, value); }
        }
        string statusVat;
        public string StatusVat
        {
            get { return statusVat; }
            set { SetPropertyValue(nameof(StatusVat), ref statusVat, value); }
        }
        string regon;
        public string Regon
        {
            get { return regon; }
            set { SetPropertyValue(nameof(Regon), ref regon, value); }
        }
        string pesel;
        public string Pesel
        {
            get { return pesel; }
            set { SetPropertyValue(nameof(Pesel), ref pesel, value); }
        }
        string krs;
        public string Krs
        {
            get { return krs; }
            set { SetPropertyValue(nameof(Krs), ref krs, value); }
        }
        string residenceAddress;
        public string ResidenceAddress
        {
            get { return residenceAddress; }
            set { SetPropertyValue(nameof(ResidenceAddress), ref residenceAddress, value); }
        }
        string workingAddress;
        public string WorkingAddress
        {
            get { return workingAddress; }
            set { SetPropertyValue(nameof(WorkingAddress), ref workingAddress, value); }
        }

        [Association("Representatives-EntityPerson")]
        public XPCollection<EntityPerson> Representatives
        {
            get { return GetCollection<EntityPerson>(nameof(Representatives)); }

        }
        [Association("AuthorizedClerks-EntityPerson")]
        public XPCollection<EntityPerson> AuthorizedClerks
        {
            get { return GetCollection<EntityPerson>(nameof(AuthorizedClerks)); }

        }
        [Association("Partners-EntityPerson")]
        public XPCollection<EntityPerson> Partners
        {
            get { return GetCollection<EntityPerson>(nameof(Partners)); }

        }
        string registrationDenialBasis;
        public string RegistrationDenialBasis
        {
            get { return registrationDenialBasis; }
            set { SetPropertyValue(nameof(RegistrationDenialBasis), ref registrationDenialBasis, value); }
        }
        string restorationBasis;
        public string RestorationBasis
        {
            get { return restorationBasis; }
            set { SetPropertyValue(nameof(RestorationBasis), ref restorationBasis, value); }
        }
        string removalBasis;
        public string RemovalBasis
        {
            get { return removalBasis; }
            set { SetPropertyValue(nameof(RemovalBasis), ref removalBasis, value); }
        }
        DateTime registrationLegalDate;
        public DateTime RegistrationLegalDate
        {
            get { return registrationLegalDate; }
            set { SetPropertyValue(nameof(RegistrationLegalDate), ref registrationLegalDate, value); }
        }
        DateTime registrationDenialDate;
        public DateTime RegistrationDenialDate
        {
            get { return registrationDenialDate; }
            set { SetPropertyValue(nameof(RegistrationDenialDate), ref registrationDenialDate, value); }
        }
        DateTime restorationDate;
        public DateTime RestorationDate
        {
            get { return restorationDate; }
            set { SetPropertyValue(nameof(RestorationDate), ref restorationDate, value); }
        }
        DateTime removalDate;
        public DateTime RemovalDate
        {
            get { return removalDate; }
            set { SetPropertyValue(nameof(RemovalDate), ref removalDate, value); }
        }
        string[] accountNumbers;
        public string[] AccountNumbers
        {
            get { return accountNumbers; }
            set { SetPropertyValue(nameof(AccountNumbers), ref accountNumbers, value); }
        }
        bool hasVirtualAccounts;
        public bool HasVirtualAccounts
        {
            get { return hasVirtualAccounts; }
            set { SetPropertyValue(nameof(HasVirtualAccounts), ref hasVirtualAccounts, value); }
        }
        EntityItem subject;
        [Association("EntityItem-Entity")]
        public EntityItem Subject
        {
            get { return subject; }
            set { SetPropertyValue(nameof(Subject), ref subject, value); }
        }
        EntityList subjects;
        [Association("EntityList-Entity")]
        public EntityList Subjects
        {
            get { return subjects; }
            set { SetPropertyValue(nameof(Subjects), ref subjects, value); }
        }
        Entry subjectsEntry;
        [Association("Entry")]
        public Entry SubjectsEntry
        {
            get { return subjectsEntry; }
            set { SetPropertyValue(nameof(SubjectsEntry), ref subjectsEntry, value); }
        }
    }
    [DefaultClassOptions]
    [NavigationItem("Entities")]
    public class EntityPerson : BaseObject
    {
        public EntityPerson(Session session) : base(session) { }
        string companyName;
        public string CompanyName
        {
            get { return companyName; }
            set { SetPropertyValue(nameof(CompanyName), ref companyName, value); }
        }
        string firstName;
        public string FirstName
        {
            get { return firstName; }
            set { SetPropertyValue(nameof(FirstName), ref firstName, value); }
        }
        string lastName;
        public string LastName
        {
            get { return lastName; }
            set { SetPropertyValue(nameof(LastName), ref lastName, value); }
        }
        string pesel;
        public string Pesel
        {
            get { return pesel; }
            set { SetPropertyValue(nameof(Pesel), ref pesel, value); }
        }
        string nip;
        public string Nip
        {
            get { return nip; }
            set { SetPropertyValue(nameof(Nip), ref nip, value); }
        }
        Entity entityRepresentatives;
        [Association("Representatives-EntityPerson")]
        public Entity EntityRepresentatives
        {
            get { return entityRepresentatives; }
            set { SetPropertyValue(nameof(EntityRepresentatives), ref entityRepresentatives, value); }
        }
        Entity entityAuthorizedClerks;
        [Association("AuthorizedClerks-EntityPerson")]
        public Entity EntityAuthorizedClerks
        {
            get { return entityAuthorizedClerks; }
            set { SetPropertyValue(nameof(EntityAuthorizedClerks), ref entityAuthorizedClerks, value); }
        }
        Entity entityPartners;
        [Association("Partners-EntityPerson")]
        public Entity EntityPartners
        {
            get { return entityPartners; }
            set { SetPropertyValue(nameof(EntityPartners), ref entityPartners, value); }
        }

    }
    //[DefaultClassOptions] //just to check if model done right
    public class EntityCheck : BaseObject
    {
        public EntityCheck(Session session) : base(session) { }
        string accountAssigned;
        public string AccountAssigned
        {
            get { return accountAssigned; }
            set { SetPropertyValue(nameof(AccountAssigned), ref accountAssigned, value); }
        }
        string requestDateTime;
        public string RequestDateTime
        {
            get { return requestDateTime; }
            set { SetPropertyValue(nameof(RequestDateTime), ref requestDateTime, value); }
        }
        string requestId;
        public string RequestId
        {
            get { return requestId; }
            set { SetPropertyValue(nameof(RequestId), ref requestId, value); }
        }
        EntityCheckResponse result;
        [Association("EntityCheck")]
        public EntityCheckResponse Result
        {
            get { return result; }
            set { SetPropertyValue(nameof(Result), ref result, value); }
        }
    }
    //[DefaultClassOptions]
    public class EntityCheckResponse : BaseObject
    {
        public EntityCheckResponse(Session session) : base(session) { }
        [Association("EntityCheck")]
        public XPCollection<EntityCheck> Result
        {
            get { return GetCollection<EntityCheck>(nameof(Result)); }

        }

    }
    //[DefaultClassOptions]
    public class EntityItem : BaseObject
    {
        public EntityItem(Session session) : base(session) { }
        [Association("EntityItem-Entity")]
        public XPCollection<Entity> Subject
        {
            get { return GetCollection<Entity>(nameof(Subject)); }

        }

        string requestDateTime;
        public string RequestDateTime
        {
            get { return requestDateTime; }
            set { SetPropertyValue(nameof(RequestDateTime), ref requestDateTime, value); }
        }
        string requestId;
        public string RequestId
        {
            get { return requestId; }
            set { SetPropertyValue(nameof(RequestId), ref requestId, value); }
        }
        EntityResponse result;
        [Association("EntityResponse")]
        public EntityResponse Result
        {
            get { return result; }
            set { SetPropertyValue(nameof(Result), ref result, value); }
        }

    }
    //[DefaultClassOptions]
    public class EntityList : BaseObject
    {
        public EntityList(Session session) : base(session) { }
        [Association("EntityList-Entity")]
        public XPCollection<Entity> Subjects
        {
            get { return GetCollection<Entity>(nameof(Subjects)); }

        }
        string requestDateTime;
        public string RequestDateTime
        {
            get { return requestDateTime; }
            set { SetPropertyValue(nameof(RequestDateTime), ref requestDateTime, value); }
        }
        string requestId;
        public string RequestId
        {
            get { return requestId; }
            set { SetPropertyValue(nameof(RequestId), ref requestId, value); }
        }
        EntityListResponse result;
        [Association("EntityListResponse")]
        public EntityListResponse Result
        {
            get { return result; }
            set { SetPropertyValue(nameof(Result), ref result, value); }
        }
    }
    //[DefaultClassOptions]
    public class EntityListResponse : BaseObject
    {
        public EntityListResponse(Session session) : base(session) { }
        [Association("EntityListResponse")]
        public XPCollection<EntityList> Result
        {
            get { return GetCollection<EntityList>(nameof(Result)); }

        }
    }
    //[DefaultClassOptions]
    public class EntityResponse : BaseObject
    {
        public EntityResponse(Session session) : base(session) { }
        [Association("EntityResponse")]
        public XPCollection<EntityItem> Result
        {
            get { return GetCollection<EntityItem>(nameof(Result)); }

        }
    }
    //[DefaultClassOptions]
    public class Entry : BaseObject
    {
        public Entry(Session session) : base(session) { }
        String identifier;
        public String Identifier
        {
            get { return identifier; }
            set { SetPropertyValue(nameof(Identifier), ref identifier, value); }
        }

        [Association("Entry")]
        public XPCollection<Entity> SubjectsEntry
        {
            get { return GetCollection<Entity>(nameof(SubjectsEntry)); }
        }
        EntryList entries;
        [Association("Entry-EntryList")]
        public EntryList Entries
        {
            get { return entries; }
            set { SetPropertyValue(nameof(Entries), ref entries, value); }
        }
    }
    //[DefaultClassOptions]
    public class EntryError : BaseObject
    {
        public EntryError(Session session) : base(session) { }
        String identifier;
        public String Identifier
        {
            get { return identifier; }
            set { SetPropertyValue(nameof(Identifier), ref identifier, value); }
        }
        [Association("EntryError")]
        public XPCollection<Exception> Error
        {
            get { return GetCollection<Exception>(nameof(Error)); }
        }
    }
    //[DefaultClassOptions]
    public class EntryList : BaseObject
    {
        public EntryList(Session session) : base(session) { }
        [Association("Entry-EntryList")]
        public XPCollection<Entry> Entries
        {
            get { return GetCollection<Entry>(nameof(Entries)); }
        }
        String requestDateTime;
        public String RequestDateTime
        {
            get { return requestDateTime; }
            set { SetPropertyValue(nameof(RequestDateTime), ref requestDateTime, value); }
        }
        String requestId;
        public String RequestId
        {
            get { return requestId; }
            set { SetPropertyValue(nameof(RequestId), ref requestId, value); }
        }
        EntryListResponse result;
        [Association("EntryListResponse")]
        public EntryListResponse Result
        {
            get { return result; }
            set { SetPropertyValue(nameof(Result), ref result, value); }
        }
    }
    //[DefaultClassOptions]
    public class EntryListResponse : BaseObject
    {
        public EntryListResponse(Session session) : base(session) { }
        [Association("EntryListResponse")]
        public XPCollection<EntryList> Result
        {
            get { return GetCollection<EntryList>(nameof(Result)); }

        }
    }
    //[DefaultClassOptions]
    public class Exception : BaseObject
    {

        public Exception(Session session) : base(session) { }
        String message;
        public String Message
        {
            get { return message; }
            set { SetPropertyValue(nameof(Message), ref message, value); }
        }
        String code;
        public String Code
        {
            get { return code; }
            set { SetPropertyValue(nameof(Code), ref code, value); }
        }
        EntryError error;
        [Association("EntryError")]
        public EntryError Error
        {
            get { return error; }
            set { SetPropertyValue(nameof(Error), ref error, value); }
        }
    }
}

