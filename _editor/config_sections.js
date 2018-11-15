var _Fields = [
// Option to remove from navigation bar
{
    name: 'unlisted',
    type: 'checkbox',
    placement: 'right',
    title: 'Visibility',
    label: 'Unlisted section',
},

// Meta title
{
    name: 'metaTitle',
    type: 'richtext',
    placement: 'right',
    title: 'Meta title',
    event: '@blur="textTrim"',
    placeholder: 'Add meta title...'
}, 

// Meta description
{
    name: 'metaDescription',
    type: 'richtext',
    placement: 'right',
    title: 'Meta description',
    event: '@blur="textTrim"',
    placeholder: 'Add meta description...'
}
];