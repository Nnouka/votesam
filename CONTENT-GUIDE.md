# Content Customization Guide

## 📝 Personalizing the Campaign Content

This guide helps you customize the campaign content to reflect Sam's actual platform and achievements.

## 🎯 Hero Section

**Current**: Generic campaign messaging

**To Customize**: Edit `src/components/Hero.tsx`

```typescript
<Title level={1} className="!text-white !text-5xl md:!text-7xl font-bold mb-6">
  Vote [Candidate Name] for Guild President
</Title>

<Paragraph className="!text-white !text-xl md:!text-2xl mb-8 opacity-90">
  [Your Campaign Slogan Here - Keep it short and impactful]
</Paragraph>
```

**Suggestions**:
- "Leading with Purpose. Serving with Passion."
- "Your Voice. Your Choice. Your Future."
- "Together We Build. Together We Lead."
- "Innovation. Inclusion. Impact."

## 📋 Manifesto Items

**Location**: `src/components/Manifesto.tsx`

### Current Template Structure:
```typescript
{
  icon: <IconName className="text-4xl text-color" />,
  title: "Policy Area",
  description: "What you'll do..."
}
```

### Suggested Real-World Items:

1. **Student Welfare & Mental Health**
   ```typescript
   {
     icon: <HeartOutlined className="text-4xl text-red-600" />,
     title: "Mental Health & Wellbeing",
     description: "Establish peer support groups, extend counseling service hours, and create wellness spaces across campus for stress-free study and relaxation."
   }
   ```

2. **Academic Support**
   ```typescript
   {
     icon: <BookOutlined className="text-4xl text-blue-600" />,
     title: "Academic Excellence Support",
     description: "Launch tutoring programs, advocate for extended library hours during exams, and create a digital resource hub for shared study materials."
   }
   ```

3. **Career Development**
   ```typescript
   {
     icon: <RocketOutlined className="text-4xl text-purple-600" />,
     title: "Career & Industry Links",
     description: "Organize monthly industry talks, career fairs, and mentorship programs connecting students with alumni and tech leaders."
   }
   ```

4. **Campus Life**
   ```typescript
   {
     icon: <SmileOutlined className="text-4xl text-yellow-600" />,
     title: "Vibrant Campus Culture",
     description: "Monthly cultural celebrations, sports tournaments, talent shows, and social events that bring our diverse community together."
   }
   ```

5. **Digital Infrastructure**
   ```typescript
   {
     icon: <WifiOutlined className="text-4xl text-green-600" />,
     title: "Tech Infrastructure",
     description: "Push for campus-wide WiFi improvements, more computer lab access, and modern collaboration spaces equipped with latest technology."
   }
   ```

6. **Transparent Communication**
   ```typescript
   {
     icon: <SoundOutlined className="text-4xl text-indigo-600" />,
     title: "Open Communication",
     description: "Monthly town halls, transparent budget reports, active social media presence, and a dedicated student feedback platform."
   }
   ```

## 🏆 Why Vote Sam - Qualifications

**Location**: `src/components/WhyVoteSam.tsx`

### Customize These Based on Real Experience:

1. **Leadership Experience**
   ```typescript
   {
     icon: <TrophyOutlined className="text-5xl text-yellow-500" />,
     title: "Proven Leadership",
     description: "Served as [Previous Role], leading [Number] students in [Achievement]. Successfully [Specific accomplishment]."
   }
   ```
   
   **Examples**:
   - "Class Representative for 2 years, improving student-faculty communication"
   - "President of Tech Club, growing membership by 200%"
   - "Organized 5 major campus events attended by 500+ students"

2. **Community Building**
   ```typescript
   {
     icon: <UsergroupAddOutlined className="text-5xl text-blue-500" />,
     title: "Community Builder",
     description: "[Specific examples of bringing people together, diversity initiatives, or conflict resolution]"
   }
   ```
   
   **Examples**:
   - "Founded the International Students Association"
   - "Organized cross-departmental hackathons bringing together 100+ students"
   - "Mediated housing conflicts, improving dorm community relations"

3. **Results-Driven**
   ```typescript
   {
     icon: <CheckCircleOutlined className="text-5xl text-green-500" />,
     title: "Delivers Results",
     description: "[Concrete achievements with numbers]"
   }
   ```
   
   **Examples**:
   - "Secured funding for 3 student initiatives totaling $15,000"
   - "Reduced student complaint resolution time from 2 weeks to 48 hours"
   - "Launched student app used by 80% of campus"

4. **Vision & Innovation**
   ```typescript
   {
     icon: <RiseOutlined className="text-5xl text-purple-500" />,
     title: "Innovative Thinker",
     description: "[Forward-thinking ideas implemented]"
   }
   ```
   
   **Examples**:
   - "Introduced digital voting system increasing participation by 40%"
   - "Created mentorship matching platform connecting 200+ student pairs"
   - "Launched sustainability initiative reducing campus waste by 30%"

## 💬 Testimonial Quote

**Location**: `src/components/WhyVoteSam.tsx` (bottom gradient box)

**Current**: Generic leadership quote

**Customize with**:
- Personal campaign slogan
- Endorsement from respected figure
- Sam's personal mission statement

**Examples**:
```typescript
<blockquote className="text-xl italic border-l-4 border-white pl-4 mt-8">
  "I believe in a guild that listens first and acts with purpose. Together, we'll make CMU Africa a place where every student thrives."
  <footer className="text-sm mt-2">- Sam [Last Name]</footer>
</blockquote>
```

## 🔗 Social Media Links

**Location**: `src/components/Footer.tsx`

Replace `href="#"` with actual links:

```typescript
<a 
  href="https://twitter.com/sam_campaign" 
  className="..."
>
  <TwitterOutlined />
</a>
<a 
  href="https://facebook.com/votesam" 
  className="..."
>
  <FacebookOutlined />
</a>
<a 
  href="https://instagram.com/sam4guild" 
  className="..."
>
  <InstagramOutlined />
</a>
<a 
  href="https://linkedin.com/in/sam-profile" 
  className="..."
>
  <LinkedinOutlined />
</a>
<a 
  href="mailto:sam@votesam.yinyangr.com" 
  className="..."
>
  <MailOutlined />
</a>
```

## 🎨 Visual Customization

### Profile Photo/Logo

Add Sam's photo to Hero section:

1. Add image to `src/assets/`
2. Import in Hero.tsx: `import samPhoto from '../assets/sam-photo.jpg'`
3. Add before title:
   ```typescript
   <img 
     src={samPhoto} 
     alt="Sam - Guild President Candidate" 
     className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl"
   />
   ```

### Campaign Colors

**Location**: `tailwind.config.js`

```javascript
colors: {
  primary: '#1890ff',    // Sam's primary color
  secondary: '#722ed1',  // Sam's secondary color
  accent: '#52c41a',     // Optional accent color
}
```

Suggestions:
- **Professional**: Blue (#1890ff) + Navy (#001529)
- **Energetic**: Orange (#fa8c16) + Purple (#722ed1)
- **Trustworthy**: Green (#52c41a) + Blue (#1890ff)

## 📊 Key Metrics to Highlight

Add specific numbers throughout:
- "Representing [X] students"
- "[X] years at CMU Africa"
- "Led [X] successful initiatives"
- "[X]% increase in student satisfaction" (if available)

## ✍️ Writing Tips

1. **Be Specific**: Use concrete examples, not generalities
2. **Show Impact**: Include numbers and outcomes
3. **Stay Positive**: Focus on what you'll do, not what's wrong
4. **Be Authentic**: Use Sam's actual voice and personality
5. **Keep It Concise**: Mobile users scan quickly

## 🎯 Campaign Tone

**Current tone**: Professional, optimistic, action-oriented

**Maintain**:
- Confidence without arrogance
- Vision with practical steps
- Passion with professionalism
- Inclusivity and accessibility

## 📸 Adding Images

To add photos/graphics:

1. Place in `public/` folder
2. Reference as `/image-name.jpg`
3. Or import from `src/assets/` for processing

Example:
```typescript
<img 
  src="/campaign-photo.jpg" 
  alt="Sam at campus event" 
  className="rounded-lg shadow-xl"
/>
```

## 🔄 Ongoing Updates

Keep content fresh:
- Update achievements as they happen
- Add recent photos from campaign events
- Share endorsements received
- Post campaign updates/news

## 📱 Testing Checklist

After customizing:
- [ ] All names/titles updated
- [ ] Social links work
- [ ] Email links work
- [ ] Content is proofread
- [ ] Mobile layout looks good
- [ ] All images load
- [ ] Countdown date is correct
- [ ] Build succeeds: `npm run build`

---

**Remember**: Authenticity wins votes. Use Sam's real achievements and genuine voice!
