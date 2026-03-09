export const profile = {
  name: "Sobinesh S",
  role: "Software Developer · .NET MAUI · Azure · React",
  email: "sobinesh@gmail.com",
  phone: "+91 8438146105",
  location: "Thiruvananthapuram, India",
  linkedin: "https://www.linkedin.com/in/sobinesh-s/",
  github: "https://github.com/sobinesh",
  hackerrank: "https://www.hackerrank.com/profile/sobinesh",
  leetcode: "https://leetcode.com/u/sobinesh/",
  summary:
    "Software Developer with strong coding skills and a passion for leveraging technology to solve real-world problems. Quick learner with proven analytical and problem-solving abilities.",
  bio: "Full-stack .NET developer building enterprise-grade cross-platform applications with .NET MAUI, ASP.NET, and Azure. I work across the entire stack — from MAUI mobile UIs to REST APIs to cloud-backed data pipelines.",
  bio2: "Currently at Zigbill Software Solutions building the Zigjo enterprise suite — a unified MAUI app covering WSR, CRM, HR, and KPI modules. Previously interned at RexCoders building React/Next.js frontends.",
};

export const stats = [
  { num: "2+", label: "Years experience" },
  { num: "5+", label: "Enterprise modules" },
  { num: "3+", label: "Platforms targeted" },
  { num: "AI", label: "OCR & Azure AI" },
];

export const tickerItems = [
  "C# · .NET 8/9",
  "ASP.NET Core",
  "Microsoft Azure",
  ".NET MAUI",
  "Xamarin",
  "React.js · Next.js",
  "SQL · Cosmos DB",
  "MVVM Architecture",
  "Azure AI & OCR",
  "REST APIs",
];

export const featuredPost = {
  label: "✦ Featured Project",
  title: "Zigjo — Unified Enterprise Management App in .NET MAUI",
  excerpt:
    "A monolithic .NET MAUI application integrating WSR, CRM, HR, and KPI modules into a single cross-platform app. Built shared services, unified navigation, caching layers, and module communication patterns — all backed by Azure Table Storage and Cosmos DB.",
  href: "#projects",
};

export type TagColor =
  | "dotnet"
  | "azure"
  | "ai"
  | "sql"
  | "maui"
  | "clean"
  | "react"
  | "python";

export const tagStyles: Record<TagColor, string> = {
  dotnet: "border-purple-500 text-purple-400",
  azure: "border-blue-500 text-blue-400",
  ai: "border-orange-500 text-orange-400",
  sql: "border-yellow-500 text-yellow-400",
  maui: "border-green-500 text-green-400",
  clean: "border-pink-500 text-pink-400",
  react: "border-cyan-500 text-cyan-400",
  python: "border-yellow-400 text-yellow-300",
};

export interface ArticleSection {
  heading: string;
  body: string;
  code?: string;
  language?: string;
}

export interface Post {
  slug: string;
  tag: string;
  tagColor: TagColor;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: ArticleSection[];
}

export const posts: Post[] = [
  {
    slug: "migrating-xamarin-to-maui",
    tag: ".NET MAUI",
    tagColor: "maui",
    date: "Feb 20, 2026",
    title: "Migrating Xamarin.Forms to .NET MAUI: Lessons from a Real Enterprise App",
    excerpt:
      "How we migrated the legacy Zigjo Xamarin suite to .NET MAUI — covering breaking changes, MVVM wiring differences, and performance wins.",
    readTime: "10 min read",
    content: [
      {
        heading: "Why We Migrated",
        body: "The Zigjo suite was originally built on Xamarin.Forms — a solid framework that served us well, but Microsoft officially deprecated it in May 2024. With .NET MAUI being the designated successor, migration wasn't optional. Beyond the support deadline, MAUI promised better performance, a cleaner single-project structure, and tighter integration with .NET 8/9 features we were already using on the backend.",
      },
      {
        heading: "The Single-Project Structure",
        body: "One of the biggest structural changes is that MAUI uses a single project targeting multiple platforms, rather than Xamarin's platform-specific head projects. This means no more Xamarin.Android or Xamarin.iOS projects cluttering your solution. Platform-specific code now lives in Platforms/ folders inside the same project. This cleaned up our solution significantly.",
        code: `// Old Xamarin structure
ZigjoApp/
  ZigjoApp (shared)
  ZigjoApp.Android
  ZigjoApp.iOS

// New MAUI structure
ZigjoApp/
  Platforms/
    Android/
    iOS/
    Windows/
  MauiProgram.cs`,
        language: "bash",
      },
      {
        heading: "MVVM Wiring Changes",
        body: "In Xamarin.Forms we used third-party MVVM libraries. MAUI ships with CommunityToolkit.Mvvm which has excellent source generators. Replacing [Command] attributes and ObservableProperty was mostly mechanical, but the source generator approach eliminates a lot of boilerplate we had been writing by hand.",
        code: `// Before — Xamarin with manual INotifyPropertyChanged
private string _title;
public string Title
{
    get => _title;
    set { _title = value; OnPropertyChanged(); }
}

// After — MAUI with CommunityToolkit.Mvvm
[ObservableProperty]
private string _title;

// Command binding
[RelayCommand]
private async Task LoadDataAsync() { ... }`,
        language: "csharp",
      },
      {
        heading: "Performance Wins",
        body: "After migration, app startup time on our test devices dropped noticeably. Cold start on Android went from ~2.8s to ~1.6s. Memory usage for the KPI module dashboard was also reduced because MAUI's handler architecture is more lightweight than Xamarin's renderer pattern. The handlers don't create extra wrapper views on the native side, which matters when you have complex list views.",
      },
      {
        heading: "Gotchas to Watch Out For",
        body: "Not everything was smooth. Custom renderers in Xamarin become Handlers in MAUI and the API is completely different. We had a few custom controls that needed full rewrites rather than simple migration. Also, some NuGet packages we depended on didn't have MAUI-compatible versions yet at the time of migration — always check package compatibility early.",
      },
      {
        heading: "Conclusion",
        body: "The migration was worth it. The single project structure is cleaner, CommunityToolkit.Mvvm is excellent, and the performance improvements are real. If you're still on Xamarin.Forms, start the migration now — don't wait until the last minute. The sooner you migrate, the sooner you benefit from the modern .NET ecosystem.",
      },
    ],
  },
  {
    slug: "azure-table-storage-vs-cosmos-db",
    tag: "Azure",
    tagColor: "azure",
    date: "Feb 5, 2026",
    title: "Azure Table Storage vs Cosmos DB: When to Use Which",
    excerpt:
      "A practical comparison from building enterprise backends — when Table Storage's simplicity wins, and when Cosmos DB's flexibility is worth the cost.",
    readTime: "8 min read",
    content: [
      {
        heading: "The Decision We Had to Make",
        body: "When building the Zigjo backend, we needed to decide where to store different types of data. We use both Azure Table Storage and Cosmos DB in production, and the split was deliberate. This article explains our reasoning — not from theory, but from what actually worked and what didn't.",
      },
      {
        heading: "Azure Table Storage — Simple, Fast, Cheap",
        body: "Table Storage is a key-value NoSQL store. It's extremely cheap, fast for simple lookups by PartitionKey + RowKey, and requires zero configuration. We use it for high-volume, simple read/write operations — things like session data, audit logs, and notification queues. If your query pattern is 'get by partition key', Table Storage is hard to beat on price.",
        code: `// Reading from Azure Table Storage
var client = new TableClient(connectionString, "AuditLogs");
var entity = await client.GetEntityAsync<AuditLog>(
    partitionKey: userId,
    rowKey: eventId
);`,
        language: "csharp",
      },
      {
        heading: "Cosmos DB — Flexible, Powerful, Pricier",
        body: "Cosmos DB is a globally distributed, multi-model database. We use it where we need rich querying, flexible schemas, or where the document structure varies significantly between records — the CRM lead pipeline is a good example. Lead records can have very different shapes depending on the source, and Cosmos DB handles that naturally.",
        code: `// Querying Cosmos DB with LINQ
var container = cosmosClient.GetContainer("zigjo", "leads");
var query = container.GetItemLinqQueryable<Lead>()
    .Where(l => l.AssignedTo == agentId && l.Status == "Open")
    .OrderByDescending(l => l.CreatedAt);

var results = new List<Lead>();
using var feed = query.ToFeedIterator();
while (feed.HasMoreResults)
{
    var response = await feed.ReadNextAsync();
    results.AddRange(response);
}`,
        language: "csharp",
      },
      {
        heading: "Our Decision Framework",
        body: "We use Table Storage when: data access is simple (get by ID), volume is high and cost matters, schema is fixed and flat. We use Cosmos DB when: we need secondary indexes or complex queries, documents have nested or variable structure, or we need change feed for real-time processing. Don't reach for Cosmos DB by default — Table Storage handles a surprising amount of enterprise workloads at a fraction of the cost.",
      },
    ],
  },
  {
    slug: "azure-ai-vision-business-card-scanner",
    tag: "AI & OCR",
    tagColor: "ai",
    date: "Jan 22, 2026",
    title: "Building a Business Card Scanner with Azure AI Vision and MAUI",
    excerpt:
      "Inside Zigjo CRM's OCR feature — capturing camera images in .NET MAUI, sending them to Azure AI Vision, and parsing results into structured lead data.",
    readTime: "12 min read",
    content: [
      {
        heading: "The Feature",
        body: "The Zigjo CRM module needed a way for sales reps to quickly capture leads from physical business cards. The flow: open the app, tap 'Scan Card', point the camera at the card, and watch the name, phone, email, and company auto-fill into the lead form. This is backed by Azure AI Vision's Read API (OCR).",
      },
      {
        heading: "Capturing the Image in MAUI",
        body: "MAUI's MediaPicker API makes camera capture straightforward cross-platform. We capture the photo, convert it to a byte array, and pass it to our Azure service.",
        code: `var photo = await MediaPicker.CapturePhotoAsync();
if (photo == null) return;

using var stream = await photo.OpenReadAsync();
var bytes = new byte[stream.Length];
await stream.ReadAsync(bytes, 0, bytes.Length);

var result = await _ocrService.ExtractTextAsync(bytes);`,
        language: "csharp",
      },
      {
        heading: "Calling Azure AI Vision",
        body: "The Azure AI Vision Read API is asynchronous — you submit the image, get back an operation URL, then poll until results are ready. We wrapped this in a clean service that handles the polling loop.",
        code: `public async Task<OcrResult> ExtractTextAsync(byte[] imageBytes)
{
    using var content = new ByteArrayContent(imageBytes);
    content.Headers.ContentType = new MediaTypeHeaderValue("image/jpeg");

    // Submit for analysis
    var response = await _httpClient.PostAsync(
        $"{_endpoint}/vision/v3.2/read/analyze", content);

    var operationUrl = response.Headers.GetValues("Operation-Location").First();

    // Poll for result
    ReadResult? readResult = null;
    while (readResult?.Status != "succeeded")
    {
        await Task.Delay(500);
        var poll = await _httpClient.GetFromJsonAsync<ReadResult>(operationUrl);
        readResult = poll;
    }

    return ParseBusinessCard(readResult);
}`,
        language: "csharp",
      },
      {
        heading: "Parsing Results into Structured Data",
        body: "Raw OCR gives you lines of text with bounding boxes. The intelligence is in parsing those lines into fields. We use pattern matching — email regex, phone regex, and heuristics for name and company (name is usually the largest text or first line, company often follows). It's not perfect, but it gets ~90% accuracy on standard business cards which is good enough to save the rep time.",
      },
      {
        heading: "Lessons Learned",
        body: "Image quality matters enormously. Blurry or skewed photos give poor results. We added a quality check step that measures image variance and warns the user if the image is likely blurry. Also, business cards with fancy fonts or unusual layouts still trip up OCR — we always show the parsed results for user confirmation before saving to the lead record.",
      },
    ],
  },
  {
    slug: "rest-api-design-maui-web",
    tag: "ASP.NET",
    tagColor: "dotnet",
    date: "Jan 10, 2026",
    title: "Designing REST APIs for Cross-Platform MAUI + Web Clients",
    excerpt:
      "How to structure your ASP.NET Core API so it serves both your MAUI mobile app and React/Next.js web frontend cleanly without duplication.",
    readTime: "9 min read",
    content: [
      {
        heading: "The Challenge",
        body: "In the Zigjo suite, the same backend API serves both the .NET MAUI mobile app and a React/Next.js web dashboard. Mobile and web have different needs — mobile wants compact payloads and offline-friendly patterns, web wants richer data for dashboards. The challenge is designing an API that serves both without becoming a mess of endpoint duplication.",
      },
      {
        heading: "Versioning from Day One",
        body: "We version our API from the start using URL versioning. Mobile clients are harder to update than web clients — once a mobile app is on a user's device, it stays until they update. API versioning gives you the freedom to evolve the API without breaking existing clients.",
        code: `// Program.cs
builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
});

// Controller
[ApiController]
[Route("api/v{version:apiVersion}/leads")]
[ApiVersion("1.0")]
[ApiVersion("2.0")]
public class LeadsController : ControllerBase { }`,
        language: "csharp",
      },
      {
        heading: "Response Shaping with Query Params",
        body: "Rather than duplicate endpoints, we use a 'fields' query parameter pattern to let clients request only what they need. The MAUI app requests minimal fields for list views; the web dashboard requests full objects for detail views. This keeps payload sizes small on mobile without creating separate endpoints.",
        code: `// GET /api/v1/leads?fields=id,name,status,phone
// Returns compact version for MAUI list view

// GET /api/v1/leads/123?fields=full
// Returns complete lead object for web detail view`,
        language: "bash",
      },
      {
        heading: "Consistent Error Responses",
        body: "Both clients need predictable error shapes. We use the RFC 7807 Problem Details standard throughout — same shape whether it's a validation error, auth failure, or server error. This means one error handling implementation works on both the MAUI and React sides.",
      },
    ],
  },
  {
    slug: "nextjs-flyouts-menus",
    tag: "React / Next.js",
    tagColor: "react",
    date: "Dec 18, 2025",
    title: "Building Responsive Flyouts and Menus in Next.js",
    excerpt:
      "Patterns I used at RexCoders for building component-driven, accessible flyout menus and responsive navigation in Next.js.",
    readTime: "7 min read",
    content: [
      {
        heading: "The Problem with Simple Dropdowns",
        body: "At RexCoders, building the ACADX platform, we needed navigation and flyout menus that worked across mobile, tablet, and desktop without JavaScript-heavy libraries. The common pitfall is tying menu state to individual components — leading to z-index hell and poor accessibility.",
      },
      {
        heading: "Context-Based Menu State",
        body: "We solved this by lifting menu state into a context provider. This lets any component open or close any menu without prop drilling, and makes it trivial to close all menus when the user clicks outside.",
        code: `const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggle = (id: string) =>
    setOpenMenu(prev => prev === id ? null : id);

  const close = () => setOpenMenu(null);

  return (
    <MenuContext.Provider value={{ openMenu, toggle, close }}>
      <div onClick={close}>{children}</div>
    </MenuContext.Provider>
  );
}`,
        language: "typescript",
      },
      {
        heading: "The Flyout Component",
        body: "With context in place, the flyout itself is simple. It reads from context to know if it should be visible, and stops click propagation so clicking inside doesn't close it.",
        code: `export function Flyout({ id, trigger, children }: FlyoutProps) {
  const { openMenu, toggle } = useMenu();
  const isOpen = openMenu === id;

  return (
    <div style={{ position: 'relative' }}>
      <button onClick={(e) => { e.stopPropagation(); toggle(id); }}>
        {trigger}
      </button>
      {isOpen && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{ position: 'absolute', top: '100%', zIndex: 50 }}
        >
          {children}
        </div>
      )}
    </div>
  );
}`,
        language: "typescript",
      },
      {
        heading: "Accessibility Considerations",
        body: "Menus need keyboard support too — Escape to close, arrow keys to navigate. We added a useEffect that listens for Escape globally and calls close(). For full accessibility, flyout triggers should be proper buttons with aria-expanded and aria-controls attributes pointing to the flyout panel.",
      },
    ],
  },
  {
    slug: "mvvm-maui-clean-separation",
    tag: "MVVM",
    tagColor: "clean",
    date: "Dec 2, 2025",
    title: "MVVM in .NET MAUI: Clean Separation Without the Boilerplate",
    excerpt:
      "How the MVVM pattern keeps your MAUI codebase testable and maintainable — with real binding, command, and service examples from enterprise modules.",
    readTime: "11 min read",
    content: [
      {
        heading: "Why MVVM Matters in MAUI",
        body: "The MAUI MVVM pattern separates your UI (View), UI logic (ViewModel), and data (Model). In a complex enterprise app like Zigjo — with HR, CRM, WSR, and KPI modules — this separation is what keeps the codebase maintainable as it grows. Without it, you end up with hundreds-of-lines code-behind files that are impossible to test.",
      },
      {
        heading: "CommunityToolkit.Mvvm — The Right Choice",
        body: "Microsoft's CommunityToolkit.Mvvm is the standard solution for MAUI. Its source generators eliminate property boilerplate completely. You declare fields with [ObservableProperty] and the generator creates the full property with change notification for you.",
        code: `using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

public partial class LeadViewModel : ObservableObject
{
    [ObservableProperty]
    private string _leadName = string.Empty;

    [ObservableProperty]
    private bool _isLoading;

    [ObservableProperty]
    private ObservableCollection<Lead> _leads = new();

    [RelayCommand]
    private async Task LoadLeadsAsync()
    {
        IsLoading = true;
        try
        {
            var data = await _leadService.GetLeadsAsync();
            Leads = new ObservableCollection<Lead>(data);
        }
        finally
        {
            IsLoading = false;
        }
    }
}`,
        language: "csharp",
      },
      {
        heading: "Binding in XAML",
        body: "The ViewModel properties bind to your XAML view cleanly. The ActivityIndicator binds to IsLoading, the CollectionView binds to Leads, and the button binds to the LoadLeadsCommand that the [RelayCommand] attribute generates automatically.",
        code: `<ContentPage xmlns:vm="clr-namespace:Zigjo.ViewModels"
             x:DataType="vm:LeadViewModel">

    <ActivityIndicator IsRunning="{Binding IsLoading}"
                       IsVisible="{Binding IsLoading}" />

    <CollectionView ItemsSource="{Binding Leads}">
        <CollectionView.ItemTemplate>
            <DataTemplate x:DataType="model:Lead">
                <Label Text="{Binding LeadName}" />
            </DataTemplate>
        </CollectionView.ItemTemplate>
    </CollectionView>

    <Button Text="Refresh"
            Command="{Binding LoadLeadsCommand}" />
</ContentPage>`,
        language: "xml",
      },
      {
        heading: "Dependency Injection with Services",
        body: "ViewModels should never directly instantiate services. Inject them via constructor — this makes unit testing straightforward since you can inject mock services in tests. MAUI's built-in DI container in MauiProgram.cs handles registration.",
        code: `// MauiProgram.cs
builder.Services.AddSingleton<ILeadService, LeadService>();
builder.Services.AddTransient<LeadViewModel>();
builder.Services.AddTransient<LeadListPage>();

// ViewModel constructor
public LeadViewModel(ILeadService leadService)
{
    _leadService = leadService;
}`,
        language: "csharp",
      },
      {
        heading: "Conclusion",
        body: "MVVM with CommunityToolkit.Mvvm is the right architecture for any non-trivial MAUI app. The source generators kill the boilerplate that used to make MVVM feel heavy. Combine it with proper DI and you have a codebase that scales to dozens of screens without becoming a tangled mess.",
      },
    ],
  },
];

export const stackItems = [
  { icon: "◆", name: "C# / .NET" },
  { icon: "◉", name: ".NET MAUI" },
  { icon: "☁", name: "Azure" },
  { icon: "▲", name: "ASP.NET" },
  { icon: "⬡", name: "React / Next.js" },
  { icon: "✦", name: "AI & OCR" },
];

export const languages = ["C#", "C++", "Java", "Python", "JavaScript", "SQL"];
export const frameworks = ["ASP.NET", "MAUI", "Xamarin", "React.js", "Next.js"];
export const softSkills = [
  "Problem Solving",
  "Attention to Detail",
  "Learning Agility",
  "Time Management",
  "Adaptability",
  "Creativity",
];

export const experience = [
  {
    period: "Dec 2024 – Present",
    role: "Software Developer",
    company: "Zigbill Software Solutions · Thiruvananthapuram",
    bullets: [
      "Full-stack .NET 8/9 apps with MVVM architecture",
      "Migrated legacy Xamarin projects to .NET MAUI",
      "Azure: Speech, Table Storage, Cosmos DB, AI services",
      "REST APIs with ASP.NET, ERP & supply-chain modules",
    ],
  },
  {
    period: "Nov 2023 – Mar 2024",
    role: "Frontend Intern",
    company: "RexCoders · Nagercoil",
    bullets: [
      "Built modular components in React.js and Next.js",
      "Developed flyouts, responsive menus, page structures",
      "Optimised component rendering and state management",
    ],
  },
];

export const education = [
  {
    period: "2019 – 2023",
    degree: "B.E. Computer Science Engineering",
    school: "St. Xavier's Catholic College of Engineering",
    detail: "CGPA: 7.7",
  },
];

export const certifications = [
  "Database Programming with SQL — Oracle Academy",
  "University Admit Probability Predictor — ICT Academy & IBM Watson",
  "HackerRank Java Gold Badge · SQL & Python certified",
  'Microsoft Philanthropies "Siksha for Educators" — Cyber Security',
];

export interface Project {
  name: string;
  tag: string;
  tagColor: TagColor;
  description: string;
  bullets: string[];
}

export const projects: Project[] = [
  {
    name: "Zigjo",
    tag: ".NET MAUI",
    tagColor: "maui",
    description: "Unified Enterprise Management Application",
    bullets: [
      "Monolithic MAUI app integrating WSR, CRM, HR & KPI modules",
      "Shared services, unified navigation, caching & module communication",
      "Azure backend for secure, scalable storage and data operations",
    ],
  },
  {
    name: "Zigjo CRM",
    tag: "AI + OCR",
    tagColor: "ai",
    description: "Customer Relationship Management with Azure AI Vision",
    bullets: [
      "Business card scanning via device camera with OCR (Azure AI Vision)",
      "Lead-entry automation, AI-assisted suggestions & validation workflows",
      "Lead tracking, client onboarding, follow-up reminders & ticketing",
    ],
  },
  {
    name: "ZigjoWorks",
    tag: "Azure",
    tagColor: "azure",
    description: "Work & Service Request (WSR) Management System",
    bullets: [
      "Technician dashboards, assignment modules & closure workflows",
      "Cloud-backed business logic with Azure Table Storage & Cosmos DB",
      "MAUI UI with optimised load times and fluid navigation",
    ],
  },
  {
    name: "Zigjo HR",
    tag: ".NET MAUI",
    tagColor: "maui",
    description: "Human Resource Management System",
    bullets: [
      "Attendance, leave management, schedules & HR workflows",
      "Leave request flows, approval chains & attendance dashboards",
      "Real-time notifications, shift scheduling & role permissions",
    ],
  },
  {
    name: "Zigjo KPI",
    tag: "Analytics",
    tagColor: "dotnet",
    description: "Key Performance Index Application",
    bullets: [
      "KPI creation, scoring, analytics & employee evaluation",
      "Modules for configuration, weight assignment & scoring computations",
      "Summary views for employees, supervisors & management",
    ],
  },
  {
    name: "ACADX",
    tag: "Next.js",
    tagColor: "react",
    description: "Academic Management Platform",
    bullets: [
      "Next.js SSR with Three.js 3D dashboards and Framer Motion animations",
      "Student and institution activity management system",
      "Modular, reusable component architecture",
    ],
  },
];

export const miniProjects = [
  {
    name: "Real Estate Website",
    tech: "HTML · CSS · JS · AWS",
    description: "Designed and hosted a real estate website on AWS.",
  },
  {
    name: "University Admit Predictor",
    tech: "Python · IBM Watson",
    description:
      "ML model predicting university admission probability (ICT Academy & IBM).",
  },
  {
    name: "Car Parking Space Detection",
    tech: "Python · OpenCV",
    description:
      "Detects empty parking slots efficiently using OpenCV with low resource usage.",
  },
];

export const achievements = [
  { org: "Oracle Academy", title: "Database Programming with SQL" },
  { org: "ICT Academy & IBM", title: "University Admit Probability Predictor" },
  { org: "HackerRank", title: "Java Gold Badge · SQL & Python Certified" },
  {
    org: "Microsoft Philanthropies",
    title: 'Siksha for Educators — Cyber Security',
  },
];
