import { useState, useEffect } from 'react';

interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

interface SidebarProps {
  tableOfContents: TableOfContentsItem[];
}

const Sidebar = ({ tableOfContents }: SidebarProps) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2, h3');
      let currentId = '';
      headings.forEach((heading) => {
        if (heading.getBoundingClientRect().top < 100) {
          currentId = heading.id;
        }
      });
      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          On this page
        </h4>
        <nav>
          <ul>
            {tableOfContents.map((item) => (
              <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 1}rem` }}>
                <a
                  href={`#${item.id}`}
                  className={`block text-sm transition-colors py-1 ${
                    activeId === item.id
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;